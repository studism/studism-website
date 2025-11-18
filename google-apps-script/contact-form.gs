/**
 * Studism お問い合わせフォーム - Google Apps Script
 *
 * セットアップ手順:
 * 1. https://script.google.com にアクセス
 * 2. 新規プロジェクト作成
 * 3. このコードを貼り付け
 * 4. RECIPIENT_EMAIL を自分のメールアドレスに変更
 * 5. デプロイ → 新しいデプロイ → ウェブアプリとして
 * 6. 「次のユーザーとして実行」: 自分
 * 7. 「アクセスできるユーザー」: 全員
 * 8. デプロイURLをコピーして、フロントエンドに設定
 */

// メール送信先（ここを変更してください）
const RECIPIENT_EMAIL = "your-email@example.com";

function doPost(e) {
  try {
    // CORSヘッダーを設定
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);

    // リクエストデータを解析
    const data = JSON.parse(e.postData.contents);

    // バリデーション
    if (!data.name || !data.email || !data.category || !data.message) {
      return output.setContent(JSON.stringify({
        error: "必須項目が入力されていません"
      }));
    }

    // メールの件名
    const subject = `【Studism お問い合わせ】${data.category}`;

    // メール本文
    const body = `
Studismウェブサイトからお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ情報
━━━━━━━━━━━━━━━━━━━━━━

お名前:
${data.name}

メールアドレス:
${data.email}

カテゴリー:
${data.category}

お問い合わせ内容:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━
送信日時: ${new Date().toLocaleString('ja-JP')}
━━━━━━━━━━━━━━━━━━━━━━
`;

    // HTMLメール本文（オプション）
    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Studismウェブサイトからお問い合わせ</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h3 style="color: #666; border-bottom: 2px solid #ddd; padding-bottom: 10px;">お問い合わせ情報</h3>

          <p><strong>お名前:</strong><br>${data.name}</p>
          <p><strong>メールアドレス:</strong><br>${data.email}</p>
          <p><strong>カテゴリー:</strong><br>${data.category}</p>
          <p><strong>お問い合わせ内容:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          送信日時: ${new Date().toLocaleString('ja-JP')}
        </p>
      </div>
    `;

    // メール送信
    GmailApp.sendEmail(RECIPIENT_EMAIL, subject, body, {
      htmlBody: htmlBody,
      name: 'Studism お問い合わせフォーム'
    });

    // 成功レスポンス
    return output.setContent(JSON.stringify({
      message: "お問い合わせを送信しました。ご連絡ありがとうございます。"
    }));

  } catch (error) {
    // エラーレスポンス
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        error: "送信中にエラーが発生しました。しばらくしてから再度お試しください。"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// テスト用関数（Apps Scriptエディタで実行して動作確認）
function testDoPost() {
  const testData = {
    name: "テスト太郎",
    email: "test@example.com",
    category: "アプリについて",
    message: "これはテストメッセージです。"
  };

  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };

  const result = doPost(e);
  Logger.log(result.getContent());
}
