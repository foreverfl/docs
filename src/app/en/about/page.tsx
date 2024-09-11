export default function About() {
  return (
    <main className="min-h-[105vh] lg:min-h-[85vh] p-6 bg-white dark:bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-left">
          About This Page
        </h1>

        {/* 목록으로 변경 */}
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            This page is a collection of official documents that I have
            referenced at least once while programming.
          </li>
          <li>
            Official documents provided in <b>English</b> are translated into{" "}
            <b>Japanese</b> and <b>Korean</b> and made available here.
          </li>
          <li>
            Pages where I contributed to the official documentation and had my
            contributions reflected are marked in{" "}
            <b className="text-green-600 dark:text-green-400">green</b>, while
            pages I translated and hosted on my subdomain are marked in{" "}
            <b className="text-orange-600 dark:text-orange-400">orange</b>.
          </li>
          <li>
            Pages hosted on my subdomain will eventually be integrated into the
            official documentation.
          </li>
          <li>
            The site hosted on my subdomain contains ads to cover server
            maintenance costs.
          </li>
          <li>
            The design of the pages is primarily aimed at being the same or
            similar to the official documents.
          </li>
          <li>
            First, I plan to translate documentation tools, followed by
            translating content related to JavaScript in sequence.
          </li>
        </ul>
      </div>
    </main>
  );
}
