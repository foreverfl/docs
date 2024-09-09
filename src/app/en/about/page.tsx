export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          About This Page
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          This page is a collection of official documents that I have referenced
          at least once while programming.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Official documents provided in English are translated into Japanese
          and Korean and made available here.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Pages where I contributed to the official documentation and had my
          contributions reflected are marked in green, while pages I translated
          and hosted on my subdomain are marked in orange.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Pages hosted on my subdomain will eventually be integrated into the
          official documentation.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          The design of the pages is primarily aimed at being the same or
          similar to the official documents.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          First, I plan to translate documentation tools, followed by
          translating content related to JavaScript in sequence.
        </p>
      </div>
    </div>
  );
}
