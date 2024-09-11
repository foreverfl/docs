export default function About() {
  return (
    <main className="min-h-[105vh] lg:min-h-[85vh] p-6 bg-white dark:bg-neutral-900 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-left">
          이 페이지에 대하여
        </h1>

        {/* 목록으로 변경 */}
        <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-2">
          <li>
            이 페이지는 제가 프로그래밍을 하면서 한 번이라도 참고한 공식 문서를
            모아놓은 것입니다.
          </li>
          <li>
            <b>영어</b>로 제공되는 공식 문서를, <b>일본어</b> 및 <b>한국어</b>로
            번역하여 제공하고 있습니다.
          </li>
          <li>
            제가 공식 문서에 기여하여 반영된 페이지는{" "}
            <b className="text-green-600 dark:text-green-400">녹색</b>으로,
            번역만 진행해 제 서브도메인에서 배포한 페이지는{" "}
            <b className="text-orange-600 dark:text-orange-400">주황색</b>으로
            표시했습니다.
          </li>
          <li>
            제 서브도메인에서 배포한 페이지는 나중에 공식 문서에 통합할
            예정입니다.
          </li>
          <li>
            제가 운영하는 서브도메인 사이트에는 서버 유지 비용을 충당하기 위해
            광고가 포함되어 있습니다.
          </li>
          <li>
            기본적으로 디자인은 공식 문서와 동일하거나 유사한 형태를 목표로 하고
            있습니다.
          </li>
          <li>
            우선, 문서화 도구를 번역한 후, JavaScript와 관련된 항목부터
            순차적으로 번역해 나갈 계획입니다.
          </li>
        </ul>
      </div>
    </main>
  );
}
