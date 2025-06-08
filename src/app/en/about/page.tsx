export default function About() {
  return (
    <div className="min-h-[105vh] lg:min-h-[85vh] p-6 bg-white dark:bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-left">
          About This Page
        </h1>

        {/* 목록으로 변경 */}
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            This page is a collection of official documentation that I have
            referenced at least once while programming.
          </li>
          <li>
            Previously, I provided translations of some documents in{" "}
            <b>Korean</b> or <b>Japanese</b>, but going forward, I plan to
            integrate translation through the parapara extension.
          </li>
          <li>
            Once the parapara project is completed, documents that can be
            translated with the parapara extension will be displayed in green.
          </li>
          <li>
            You can check the progress of this project{" "}
            <a
              href="https://github.com/orgs/parapara-app/repositories"
              className="text-blue-500 no-underline hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
