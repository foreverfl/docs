export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          이 페이지에 대하여
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          이 페이지는 제가 프로그래밍을 하면서 한 번이라도 참고한 공식 문서를
          모아놓은 것입니다.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          영어로 제공되는 공식 문서를 일본어 및 한국어로 번역하여 제공하고
          있습니다.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          제가 공식 문서에 기여하여 반영된 페이지는 녹색으로, 번역만 진행해 제
          서브도메인에서 배포한 페이지는 주황색으로 표시했습니다.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          제 서브도메인에서 배포한 페이지는 나중에 공식 문서에 통합할
          예정입니다.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          기본적으로 디자인은 공식 문서와 동일하거나 유사한 형태를 목표로 하고
          있습니다.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          우선, 문서화 도구를 번역한 후, JavaScript와 관련된 항목부터 순차적으로
          번역해 나갈 계획입니다.
        </p>
      </div>
    </div>
  );
}
