export default function About() {
  return (
    <div className="min-h-[105vh] lg:min-h-[85vh] p-6 bg-white dark:bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-left">
          このページについて
        </h1>

        {/* 목록으로 변경 */}
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            このページは、私がプログラミングをする際に一度でも参考にした公式
            ドキュメントをまとめた場所です。
          </li>
          <li>
            以前は一部のドキュメントを<b>韓国語</b>または<b>日本語</b>に翻訳して
            提供していましたが、今後はparapara拡張機能を通じて翻訳を統合する
            予定です。
          </li>
          <li>
            paraparaプロジェクトが完了すると、parapara拡張機能で翻訳可能な
            ドキュメントは緑色で表示される予定です。
          </li>
          <li>
            このプロジェクトの進行状況は{" "}
            <a
              href="https://github.com/orgs/parapara-app/repositories"
              className="text-blue-500 no-underline hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            で確認できます。
          </li>
        </ul>
      </div>
    </div>
  );
}
