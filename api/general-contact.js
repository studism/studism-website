import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, category, message } = req.body;

    // Input validation
    if (!name || !email || !category || !message) {
      return res.status(400).json({ error: '必須項目が入力されていません' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: '有効なメールアドレスを入力してください' });
    }

    // Category mapping for display
    const categoryMap = {
      general: '一般的なお問い合わせ',
      app_support: 'アプリサポート',
      business: 'ビジネス・提携について',
      media: 'メディア・取材について',
      privacy: 'プライバシーポリシーについて',
      other: 'その他'
    };

    const categoryDisplay = categoryMap[category] || category;

    // Email content
    const emailContent = `
【Studism 一般お問い合わせ】

お名前: ${name}
メールアドレス: ${email}
お問い合わせ種別: ${categoryDisplay}

詳細:
${message}

---
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    `.trim();

    // Send email
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: [process.env.CONTACT_EMAIL_TO],
      subject: `【Studism】お問い合わせ - ${categoryDisplay}`,
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'メール送信に失敗しました' });
    }

    // Send confirmation email to user
    const confirmationContent = `
${name} 様

この度は Studism にお問い合わせいただき、ありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

お問い合わせ種別: ${categoryDisplay}
詳細: ${message}

お問い合わせの内容を確認の上、1-3営業日以内にご返信いたします。
お急ぎの場合は、お問い合わせ内容にその旨をご記載ください。

今後ともよろしくお願いいたします。

---
Studism Inc.
https://studism.com
    `.trim();

    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: [email],
      subject: '【Studism】お問い合わせを受け付けました',
      text: confirmationContent,
    });

    return res.status(200).json({ 
      message: 'お問い合わせを受け付けました',
      id: data?.id 
    });

  } catch (error) {
    console.error('General contact form error:', error);
    return res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
}