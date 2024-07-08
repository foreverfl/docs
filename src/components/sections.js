const sections = [
    {
        title: {
            en: "Command Line Tools",
            ja: "コマンドラインツール",
            ko: "명령줄 도구",
        },
        items: [
            {
                label: "PowerShell",
                links: [
                    {
                        lang: "English",
                        url: "https://learn.microsoft.com/en-us/powershell/",
                    },
                    {
                        lang: "日本語",
                        url: "https://learn.microsoft.com/ja-jp/powershell/",
                    },
                    {
                        lang: "한국어",
                        url: "https://learn.microsoft.com/ko-kr/powershell/",
                    },
                ],
            },
            {
                label: "Rocky Linux",
                links: [
                    { lang: "English", url: "https://docs.rockylinux.org/" },
                    { lang: "日本語", url: "https://docs.rockylinux.org/ja/" },
                    { lang: "한국어", url: "https://docs.rockylinux.org/ko/" },
                ],
            },
            {
                label: "Git",
                links: [
                    { lang: "English", url: "https://git-scm.com/doc" },
                    { lang: "日本語", url: "https://git-scm.com/book/ja/v2" },
                    { lang: "한국어", url: "https://git-scm.com/book/ko/v2" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Containerization and Orchestration",
            ja: "コンテナ化とオーケストレーション",
            ko: "컨테이너화 및 오케스트레이션",
        },
        items: [
            {
                label: "Docker",
                links: [
                    { lang: "English", url: "https://docs.docker.com/" },
                    { lang: "日本語", url: "https://docs.docker.jp/" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Kubernetes",
                links: [
                    { lang: "English", url: "https://kubernetes.io/docs/home/" },
                    { lang: "日本語", url: "https://kubernetes.io/ja/docs/home/" },
                    { lang: "한국어", url: "https://kubernetes.io/ko/docs/home/" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Deployment",
            ja: "デプロイメント",
            ko: "배포",
        },
        items: [
            {
                label: "Vercel",
                links: [
                    { lang: "English", url: "https://vercel.com/docs" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Netlify",
                links: [
                    { lang: "English", url: "https://docs.netlify.com/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Markup Languages",
            ja: "マークアップ言語",
            ko: "마크업 언어",
        },
        items: [
            {
                label: "GFM",
                links: [
                    { lang: "English", url: "https://github.github.com/gfm/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Asciidoc",
                links: [
                    { lang: "English", url: "https://docs.asciidoctor.org/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Documentation Tools",
            ja: "ドキュメンテーションツール",
            ko: "문서화 도구",
        },
        items: [
            {
                label: "Antora",
                links: [
                    { lang: "English", url: "https://docs.antora.org/antora/latest/" },
                    { lang: "日本語", url: "#" },
                    {
                        lang: "한국어",
                        url: "https://antora-ko.mogumogu.dev/antora/3.1/index.html",
                    },
                ],
            },
            {
                label: "Docusaurus",
                links: [
                    { lang: "English", url: "https://docusaurus.io/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "https://docusaurus.io/ko/" },
                ],
            },
            {
                label: "Spring REST Docs",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.spring.io/spring-restdocs/docs/current/reference/htmlsingle/",
                    },
                    {
                        lang: "日本語",
                        url: "https://spring.pleiades.io/spring-restdocs/docs/current/reference/htmlsingle/",
                    },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Javadoc",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.oracle.com/en/java/javase/22/docs/specs/javadoc/doc-comment-spec.html",
                    },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Programming Languages",
            ja: "プログラミング言語",
            ko: "프로그래밍 언어",
        },
        items: [
            {
                label: "Java",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.oracle.com/en/java/javase/22/docs/api/index.html",
                    },
                    {
                        lang: "日本語",
                        url: "https://docs.oracle.com/javase/jp/21/docs/api/index.html",
                    },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "HTML",
                links: [
                    {
                        lang: "English",
                        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    },
                    {
                        lang: "日本語",
                        url: "https://developer.mozilla.org/ja/docs/Web/HTML",
                    },
                    {
                        lang: "한국어",
                        url: "https://developer.mozilla.org/ko/docs/Web/HTML",
                    },
                ],
            },
            {
                label: "CSS",
                links: [
                    {
                        lang: "English",
                        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    },
                    {
                        lang: "日本語",
                        url: "https://developer.mozilla.org/ja/docs/Web/CSS",
                    },
                    {
                        lang: "한국어",
                        url: "https://developer.mozilla.org/ko/docs/Web/CSS",
                    },
                ],
            },
            {
                label: "JavaScript",
                links: [
                    {
                        lang: "English",
                        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    },
                    {
                        lang: "日本語",
                        url: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
                    },
                    {
                        lang: "한국어",
                        url: "https://developer.mozilla.org/ko/docs/Web/JavaScript",
                    },
                ],
            },
            {
                label: "Web APIs",
                links: [
                    {
                        lang: "English",
                        url: "https://developer.mozilla.org/en-US/docs/Web/API",
                    },
                    {
                        lang: "日本語",
                        url: "https://developer.mozilla.org/ja/docs/Web/API",
                    },
                    {
                        lang: "한국어",
                        url: "https://developer.mozilla.org/ko/docs/Web/API",
                    },
                ],
            },
            {
                label: "Python",
                links: [
                    { lang: "English", url: "https://docs.python.org/3/" },
                    { lang: "日本語", url: "https://docs.python.org/ja/3/" },
                    { lang: "한국어", url: "https://docs.python.org/ko/3/" },
                ],
            },
            {
                label: "Ruby",
                links: [
                    {
                        lang: "English",
                        url: "https://www.ruby-lang.org/en/documentation/",
                    },
                    {
                        lang: "日本語",
                        url: "https://www.ruby-lang.org/ja/documentation/",
                    },
                    {
                        lang: "한국어",
                        url: "https://www.ruby-lang.org/ko/documentation/",
                    },
                ],
            },
            {
                label: "Rust",
                links: [
                    { lang: "English", url: "https://doc.rust-lang.org/book/" },
                    { lang: "日本語", url: "https://doc.rust-jp.rs/book-ja/" },
                    { lang: "한국어", url: "https://doc.rust-kr.org/" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Runtime Environments",
            ja: "ランタイム環境",
            ko: "런타임 환경",
        },
        items: [
            {
                label: "Node.js (JavaScript)",
                links: [
                    { lang: "English", url: "https://nodejs.org/docs/latest/api/" },
                    {
                        lang: "日本語",
                        url: "https://nodejs.org/dist/latest-v8.x/docs/api/",
                    },
                    { lang: "한국어", url: "https://nodejs.sideeffect.kr/docs/" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Frameworks",
            ja: "フレームワーク",
            ko: "프레임워크",
        },
        items: [
            {
                label: "Spring Framework (Java)",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.spring.io/spring-framework/reference/index.html",
                    },
                    {
                        lang: "日本語",
                        url: "https://spring.pleiades.io/spring-framework/reference/",
                    },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Spring Boot (Java)",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.spring.io/spring-boot/index.html",
                    },
                    { lang: "日本語", url: "https://spring.pleiades.io/spring-boot/" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Next.js (JavaScript)",
                links: [
                    { lang: "English", url: "https://nextjs.org/docs" },
                    {
                        lang: "日本語",
                        url: "https://nextjs-ja-translation-docs.vercel.app/",
                    },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Electron (JavaScript)",
                links: [
                    { lang: "English", url: "https://www.electronjs.org/docs/latest/" },
                    { lang: "日本語", url: "https://www.electronjs.org/ja/docs/latest/" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Chrome Extensions (JavaScript)",
                links: [
                    {
                        lang: "English",
                        url: "https://developer.chrome.com/docs/extensions",
                    },
                    {
                        lang: "日本語",
                        url: "https://developer.chrome.com/docs/extensions?hl=ja",
                    },
                    {
                        lang: "한국어",
                        url: "https://developer.chrome.com/docs/extensions?hl=ko",
                    },
                ],
            },
            {
                label: "Django (Python)",
                links: [
                    { lang: "English", url: "https://docs.djangoproject.com/en/5.0/" },
                    { lang: "日本語", url: "https://docs.djangoproject.com/ja/5.0/" },
                    { lang: "한국어", url: "https://docs.djangoproject.com/ko/5.0/" },
                ],
            },
            {
                label: "TailwindCSS (CSS)",
                links: [
                    { lang: "English", url: "https://v2.tailwindcss.com/docs" },
                    {
                        lang: "日本語",
                        url: "https://runebook.dev/ja/docs/tailwindcss/-index-",
                    },
                    {
                        lang: "한국어",
                        url: "https://runebook.dev/ko/docs/tailwindcss/-index-",
                    },
                ],
            },
            {
                label: "BootStrap (CSS)",
                links: [
                    {
                        lang: "English",
                        url: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
                    },
                    {
                        lang: "日本語",
                        url: "https://getbootstrap.jp/docs/5.3/getting-started/introduction/",
                    },
                    {
                        lang: "한국어",
                        url: "https://getbootstrap.kr/docs/5.3/getting-started/introduction/",
                    },
                ],
            },
        ],
    },
    {
        title: {
            en: "Libraries",
            ja: "ライブラリ",
            ko: "라이브러리",
        },
        items: [
            {
                label: "React (JavaScript)",
                links: [
                    { lang: "English", url: "https://react.dev/" },
                    { lang: "日本語", url: "https://ja.react.dev/" },
                    { lang: "한국어", url: "https://ko.react.dev/" },
                ],
            },
            {
                label: "Redux Toolkit (JavaScript)",
                links: [
                    { lang: "English", url: "https://redux-toolkit.js.org/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "https://ko.redux.js.org/" },
                ],
            },
            {
                label: "Handlebars (Node.js)",
                links: [
                    { lang: "English", url: "https://handlebarsjs.com/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "https://handlebarsjs.com/ko/" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Module Bundlers",
            ja: "モジュールバンドラー",
            ko: "모듈 번들러",
        },
        items: [
            {
                label: "Webpack (JavaScript)",
                links: [
                    { lang: "English", url: "https://webpack.js.org/concepts/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "https://webpack.kr/concepts/" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Build Tools",
            ja: "ビルドツール",
            ko: "빌드 도구",
        },
        items: [
            {
                label: "Gradle (Java)",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.gradle.org/current/userguide/userguide.html",
                    },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "npm (Node.js)",
                links: [
                    { lang: "English", url: "https://docs.npmjs.com/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "pip (Python)",
                links: [
                    { lang: "English", url: "https://pip.pypa.io/en/stable/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Databases",
            ja: "データベース",
            ko: "데이터베이스",
        },
        items: [
            {
                label: "PostgreSQL",
                links: [
                    {
                        lang: "English",
                        url: "https://www.postgresql.org/docs/current/index.html",
                    },
                    { lang: "日本語", url: "https://www.postgresql.jp/document/" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "MongoDB",
                links: [
                    { lang: "English", url: "https://www.mongodb.com/docs/manual/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "https://www.mongodb.com/ko-kr/docs/manual/" },
                ],
            },
        ],
    },
    {
        title: {
            en: "SaaS APIs",
            ja: "SaaS APIs",
            ko: "SaaS APIs",
        },
        items: [
            {
                label: "Anthropic",
                links: [
                    {
                        lang: "English",
                        url: "https://docs.anthropic.com/en/api/getting-started",
                    },
                    {
                        lang: "日本語",
                        url: "https://docs.anthropic.com/ja/docs/intro-to-claude",
                    },
                    {
                        lang: "한국어",
                        url: "https://docs.anthropic.com/ko/api/getting-started",
                    },
                ],
            },
            {
                label: "OpenAI",
                links: [
                    {
                        lang: "English",
                        url: "https://platform.openai.com/docs/api-reference/introduction",
                    },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "Algolia",
                links: [
                    { lang: "English", url: "https://www.algolia.com/doc/" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
    {
        title: {
            en: "AI/ML",
            ja: "AI/ML",
            ko: "AI/ML",
        },
        items: [
            {
                label: "TensorFlow",
                links: [
                    { lang: "English", url: "https://www.tensorflow.org/" },
                    { lang: "日本語", url: "https://www.tensorflow.org/?hl=ja" },
                    { lang: "한국어", url: "https://www.tensorflow.org/?hl=ko" },
                ],
            },
            {
                label: "PyTorch",
                links: [
                    { lang: "English", url: "https://pytorch.org/" },
                    { lang: "日本語", url: "#" },
                    {
                        lang: "한국어",
                        url: "https://tutorials.pytorch.kr/recipes/recipes_index.html",
                    },
                ],
            },
        ],
    },
    {
        title: {
            en: "IDEs",
            ja: "統合開発環境",
            ko: "통합 개발 환경",
        },
        items: [
            {
                label: "Visual Studio Code",
                links: [
                    { lang: "English", url: "https://code.visualstudio.com/docs" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
            {
                label: "IntelliJ IDEA",
                links: [
                    {
                        lang: "English",
                        url: "https://www.jetbrains.com/help/idea/getting-started.html",
                    },
                    {
                        lang: "日本語",
                        url: "https://pleiades.io/help/idea/javadocs.html",
                    },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
    {
        title: {
            en: "Books",
            ja: "書籍",
            ko: "도서",
        },
        items: [
            {
                label: "Effective Java",
                links: [
                    { lang: "English", url: "#" },
                    { lang: "日本語", url: "#" },
                    { lang: "한국어", url: "#" },
                ],
            },
        ],
    },
];

export default sections;