export default function About() {
  return (
    <div className="min-h-[105vh] lg:min-h-[85vh] p-6 bg-white dark:bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-left">
          이 페이지에 대하여
        </h1>

        {/* 목록으로 변경 */}
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            이 페이지는 제가 프로그래밍을 하면서 한 번이라도 참고했던 공식
            문서들을 모아둔 공간입니다.
          </li>
          <li>
            예전에는 일부 문서를 <b>한국어</b> 또는 <b>일본어</b>로 번역해
            제공했지만, 앞으로는 parapara 확장 프로그램을 통해 번역을 통합할
            예정입니다.
          </li>
          <li>
            parapara 프로젝트가 완료되면, parapara 확장 프로그램으로 번역이
            가능한 문서들은 초록색으로 표시될 예정입니다.
          </li>
          <li>
            해당 프로젝트의 진행 상황은 {" "}
            <a
              href="https://github.com/orgs/parapara-app/repositories"
              className="text-blue-500 no-underline hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              이곳
            </a>
            에서 확인하실 수 있습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}
