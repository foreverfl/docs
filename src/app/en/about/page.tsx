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
            My subdomain site may include advertisements to cover server
            maintenance costs.
          </li>
          <li>
            Currently, I am translating <b>Docusaurus</b> and{" "}
            <b>Visual Studio Code</b>.
          </li>
          <li>
            Next, I plan to translate <b>Docker</b>, <b>PostgreSQL</b>,{" "}
            <b>Nuxt</b>, and <b>Terraform</b>.
          </li>
          <li>
            Currently, only one version of Spring Security within the Spring
            Framework has been translated.
          </li>
        </ul>
      </div>
    </main>
  );
}
