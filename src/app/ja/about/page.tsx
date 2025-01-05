export default function About() {
  return (
    <main className="min-h-[105vh] lg:min-h-[85vh] p-6 bg-white dark:bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-left">
          このページについて
        </h1>

        {/* 목록으로 변경 */}
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            このページは、私がプログラミングをしながら一度でも目を通した公式ドキュメントをまとめたものです。
          </li>
          <li>
            <b>英語</b>で提供されている公式ドキュメントを<b>日本語</b>および
            <b>韓国語</b>に翻訳して提供しています。
          </li>
          <li>
            私が公式ドキュメントに寄与して反映されたページは
            <b className="text-green-600 dark:text-green-400">緑色</b>
            で、翻訳のみを行い私のサブドメインで配信したページは
            <b className="text-orange-600 dark:text-orange-400">橙色</b>
            で表示しています。
          </li>
          <li>
            私のサブドメインで配信しているページは、いずれ公式ドキュメントに統合させるつもりです。
          </li>
          <li>
            サーバー維持費を補うために、サブドメインのサイトには広告が含まれる場合があります。
          </li>
          <li>
            まずは、ドキュメンテーションツールを翻訳し、その後はJavaScriptに関連するものから順に翻訳していくつもりです。
          </li>
          <li>
            現在は<b>Docusaurus</b>および<b>Visual Studio Code</b>を翻訳中です。
          </li>
          <li>
            次は<b>Docker</b>、<b></b>、<b>Nuxt</b>、<b>Terraform</b>
            を翻訳する予定です。PostgreSQL
          </li>
          <li>
            現在、Spring Frameworkの中でSpring
            Securityの一つのバージョンのみを翻訳しました。
          </li>
        </ul>
      </div>
    </main>
  );
}
