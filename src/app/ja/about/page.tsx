export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          このページについて
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          このページは、私がプログラミングをしながら一度でも目を通した公式ドキュメントをまとめたものです。
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          英語で提供されている公式ドキュメントを、日本語および韓国語に翻訳して提供しています。
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          私が公式ドキュメントに寄与して反映されたページは緑色で、翻訳のみを行い私のサブドメインで配信したページは橙色で表示しています。
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          私のサブドメインで配信しているページは、いずれ公式ドキュメントに統合させるつもりです。
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          基本的にデザインは、公式ドキュメントと同じか、似たものを目指しています。
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          まずは、ドキュメンテーションツールを翻訳し、その後はJavaScriptに関連するものから順に翻訳していくつもりです。
        </p>
      </div>
    </div>
  );
}
