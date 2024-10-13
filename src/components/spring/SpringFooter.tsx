"use client";

import React from "react";
import Image from "next/image";
import "./css/site.css";
import { usePathname } from "next/navigation";

interface ContentType {
  [key: string]: {
    copyright: string;
    links: { href: string; text: string; className?: string }[];
    disclaimers: string;
  };
}

const SpringFooter = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const lan = pathParts[1];

  // 언어별 텍스트 데이터
  const textContent: ContentType = {
    en: {
      copyright: `Copyright © 2005 - ${new Date().getFullYear()} Broadcom. All Rights Reserved. "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.`,
      links: [
        {
          href: "https://www.vmware.com/help/legal.html",
          text: "Terms of Use",
        },
        {
          href: "https://www.vmware.com/help/privacy.html",
          text: "Privacy Policy",
        },
        { href: "https://spring.io/trademarks", text: "Trademark Guidelines" },
        { href: "https://spring.io/thank-you", text: "Thank You" },
        {
          href: "https://www.vmware.com/help/privacy/california-privacy-rights.html",
          text: "California Privacy Rights",
        },
        {
          href: "#",
          text: "Cookie Settings",
          className: "ot-sdk-show-settings",
        },
      ],
      disclaimers: `Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, and Apache Geode™ are trademarks or registered trademarks of the Apache Software Foundation in the United States and/or other countries. Java™, Java™ SE, Java™ EE, and OpenJDK™ are trademarks of Oracle and/or its affiliates. Kubernetes® is a registered trademark of the Linux Foundation in the United States and other countries. Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries. Windows® and Microsoft® Azure are registered trademarks of Microsoft Corporation. "AWS" and "Amazon Web Services" are trademarks or registered trademarks of Amazon.com, Inc. or its affiliates. Other names may be trademarks of their respective owners.`,
    },
    ko: {
      copyright: `Copyright © 2005 - ${new Date().getFullYear()} Broadcom. All Rights Reserved. "Broadcom"이라는 용어는 Broadcom Inc. 및/또는 그 자회사를 지칭합니다.`,
      links: [
        { href: "https://www.vmware.com/help/legal.html", text: "이용 약관" },
        {
          href: "https://www.vmware.com/help/privacy.html",
          text: "개인정보 처리방침",
        },
        { href: "https://spring.io/trademarks", text: "상표 가이드라인" },
        { href: "https://spring.io/thank-you", text: "감사 인사" },
        {
          href: "https://www.vmware.com/help/privacy/california-privacy-rights.html",
          text: "캘리포니아 개인정보 권리",
        },
        { href: "#", text: "쿠키 설정", className: "ot-sdk-show-settings" },
      ],
      disclaimers: `Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™, 그리고 Apache Geode™는 미국 및/또는 기타 국가에서 Apache Software Foundation의 상표 또는 등록 상표입니다. Java™, Java™ SE, Java™ EE, 그리고 OpenJDK™는 Oracle 및/또는 그 계열사의 상표입니다. Kubernetes®는 미국 및 기타 국가에서 Linux Foundation의 등록 상표입니다. Linux®는 미국 및 기타 국가에서 Linus Torvalds의 등록 상표입니다. Windows® 및 Microsoft® Azure는 Microsoft Corporation의 등록 상표입니다. "AWS" 및 "Amazon Web Services"는 Amazon.com Inc. 또는 그 계열사의 상표 또는 등록 상표입니다. 기타 모든 상표와 저작권은 해당 소유자의 재산이며 정보 제공 목적으로만 언급됩니다. 다른 이름들은 각 소유자의 상표일 수 있습니다.`,
    },
    ja: {
      copyright: `Copyright © 2005 - ${new Date().getFullYear()} Broadcom. All Rights Reserved. 「Broadcom」は Broadcom Inc. および/またはその子会社を指します。`,
      links: [
        { href: "https://www.vmware.com/help/legal.html", text: "利用規約" },
        {
          href: "https://www.vmware.com/help/privacy.html",
          text: "プライバシーポリシー",
        },
        { href: "https://spring.io/trademarks", text: "商標ガイドライン" },
        { href: "https://spring.io/thank-you", text: "感謝の意" },
        {
          href: "https://www.vmware.com/help/privacy/california-privacy-rights.html",
          text: "カリフォルニア州のプライバシー権",
        },
        { href: "#", text: "クッキー設定", className: "ot-sdk-show-settings" },
      ],
      disclaimers: `Apache®, Apache Tomcat®, Apache Kafka®, Apache Cassandra™およびApache Geode™は、米国および/またはその他の国においてApache Software Foundationの商標または登録商標です。 Java™、Java™ SE、Java™ EE、およびOpenJDK™は、Oracleおよび/またはその関連会社の商標です。 Kubernetes®は米国およびその他の国でLinux Foundationの登録商標です。 Linux®は米国およびその他の国におけるLinus Torvaldsの登録商標です。 Windows®およびMicrosoft® Azureは、Microsoft Corporationの登録商標です。「AWS」および「Amazon Web Services」は、Amazon.com, Inc.またはその関連会社の商標または登録商標です。他のすべての商標と著作権は、情報提供のみを目的として言及されたそれぞれの所有者の財産です。その他の名称は、それぞれの所有者の商標である場合があります。`,
    },
  };

  const content = textContent[lan] || textContent["en"]; // 기본 언어는 영어로 설정

  return (
    <footer className="footer flex">
      <div id="spring-links" className="flex flex-col">
        <Image
          src="/spring/img/spring-logo.svg"
          alt="Spring"
          width={100}
          height={100}
        />
        <p className="smallest antialiased">{content.copyright}</p>
        <p className="smallest antialiased">
          {content.links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                rel="noopener noreferrer"
                className={link.className}
              >
                {link.text}
              </a>
              {index < content.links.length - 1 && " • "}
            </React.Fragment>
          ))}
        </p>
        <p className="smallest antialiased has-gray-text">
          {content.disclaimers}
        </p>
      </div>
      <div id="social-icons" className="flex jc-between">
        <a href="https://www.youtube.com/user/SpringSourceDev" title="Youtube">
          <svg
            id="youtube-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
          >
            <circle className="cls-1" cx="20" cy="20" r="20" />
            <path
              className="cls-2"
              d="M30.91,14.53a2.89,2.89,0,0,0-2-2C27.12,12,20,12,20,12s-7.12,0-8.9.47a2.9,2.9,0,0,0-2,2A30.56,30.56,0,0,0,8.63,20a30.44,30.44,0,0,0,.46,5.47,2.89,2.89,0,0,0,2,2C12.9,28,20,28,20,28s7.12,0,8.9-.47a2.87,2.87,0,0,0,2-2A30.56,30.56,0,0,0,31.37,20,28.88,28.88,0,0,0,30.91,14.53ZM17.73,23.41V16.59L23.65,20Z"
            />
          </svg>
        </a>
        <a href="https://github.com/spring-projects" title="GitHub">
          <svg
            id="github-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75.93 75.93"
          >
            <path
              className="cls-1"
              d="M38,0a38,38,0,1,0,38,38A38,38,0,0,0,38,0Z"
            />
            <path
              className="cls-2"
              d="M38,15.59A22.95,22.95,0,0,0,30.71,60.3c1.15.21,1.57-.5,1.57-1.11s0-2,0-3.9c-6.38,1.39-7.73-3.07-7.73-3.07A6.09,6.09,0,0,0,22,48.86c-2.09-1.42.15-1.39.15-1.39a4.81,4.81,0,0,1,3.52,2.36c2,3.5,5.37,2.49,6.67,1.91a4.87,4.87,0,0,1,1.46-3.07c-5.09-.58-10.45-2.55-10.45-11.34a8.84,8.84,0,0,1,2.36-6.15,8.29,8.29,0,0,1,.23-6.07s1.92-.62,6.3,2.35a21.82,21.82,0,0,1,11.49,0c4.38-3,6.3-2.35,6.3-2.35a8.29,8.29,0,0,1,.23,6.07,8.84,8.84,0,0,1,2.36,6.15c0,8.81-5.37,10.75-10.48,11.32a5.46,5.46,0,0,1,1.56,4.25c0,3.07,0,5.54,0,6.29s.42,1.33,1.58,1.1A22.94,22.94,0,0,0,38,15.59Z"
            />
          </svg>
        </a>
        <a href="https://twitter.com/springcentral" title="Twitter">
          <svg
            id="twitter-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 75.93 75.93"
          >
            <circle className="cls-1" cx="37.97" cy="37.97" r="37.97" />
            <path
              className="cls-2"
              d="M55.2,22.73a15.43,15.43,0,0,1-4.88,1.91,7.56,7.56,0,0,0-5.61-2.49A7.78,7.78,0,0,0,37,30a7.56,7.56,0,0,0,.2,1.79,21.63,21.63,0,0,1-15.84-8.23,8,8,0,0,0,2.37,10.52,7.66,7.66,0,0,1-3.48-1v.09A7.84,7.84,0,0,0,26.45,41a7.54,7.54,0,0,1-2,.28A7.64,7.64,0,0,1,23,41.09a7.71,7.71,0,0,0,7.18,5.47,15.21,15.21,0,0,1-9.55,3.37,15.78,15.78,0,0,1-1.83-.11,21.41,21.41,0,0,0,11.78,3.54c14.13,0,21.86-12,21.86-22.42,0-.34,0-.68,0-1a15.67,15.67,0,0,0,3.83-4.08,14.9,14.9,0,0,1-4.41,1.24A7.8,7.8,0,0,0,55.2,22.73Z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default SpringFooter;
