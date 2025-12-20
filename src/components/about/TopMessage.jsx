import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const TopMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">トップメッセージ</h1>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* メインメッセージ */}
              <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
                「学びを、もっと自由に。もっと楽しく。」
              </h2>

              <div className="space-y-8 text-gray-700 leading-relaxed text-center">
                <p>
                  「もっと早く知りたかった」「もっと効率よくできたはずだ」
                  学んできた道を振り返ると、そんな後悔ばかりが浮かびます。
                </p>

                <p>
                  正しいやり方を知らなかった。時間の使い方が下手だった。
                  周りに相談できる人がいなかった。
                  才能がないのではなく、環境が整っていなかっただけ。
                  そう気づいたとき、私はこのサービスをつくることを決めました。
                </p>

                <p>
                  学びたいと思った瞬間に、誰もが良い環境で学べる世界をつくりたい。
                  住んでいる場所も、通っている学校も、生まれた家庭も関係ない。
                  スマホひとつあれば、いつでも、どこでも、自分のペースで成長できる。
                  そんな「学びの民主化」を、テクノロジーの力で実現する。
                  それが私たちの使命です。
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4">
                    英語学習アプリ「SakuraEnglish」で、質の高いインプットをスキマ時間に。
                  </p>
                  <p className="mb-4">
                    時間管理アプリ「Timelyze」で、努力を数字に変え、習慣を味方につける。
                  </p>
                  <p>
                    そして「Studism」で、学びを記録し、仲間とつながり、モチベーションを維持する。
                  </p>
                </div>

                <p className="font-medium text-gray-800">
                  学ぶ → 管理する → 共有する。<br />
                  この3つが揃ったとき、学習は「頑張るもの」から「続くもの」に変わります。
                </p>

                <p>
                  私たちは、努力する人の味方です。
                  夜遅くまで机に向かう学生。仕事終わりにスキルアップを目指す社会人。何歳になっても新しいことに挑戦する人。
                </p>

                <p>
                  頑張っている人が、正しく報われる世界をつくる。
                  一人ひとりの努力を、最大限の成果に変える。
                  そのために、私たちはこれからも改善を続けていきます。
                </p>

                <div className="text-center pt-8 border-t">
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
                    すべての人に、学ぶ機会を。
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
                    すべての努力に、正しい成果を。
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
                    一緒に、次のステージへ。
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    Studism
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/about" className="text-primary hover:underline">
                  ← 企業情報に戻る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TopMessage;
