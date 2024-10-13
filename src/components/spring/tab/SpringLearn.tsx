import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface VersionInfo {
  version: string;
  labels: string[];
  refLink: string;
  apiLink: string;
}

const SpringLearn: React.FC<{ selectedProject: string }> = ({
  selectedProject,
}) => {
  const [versions, setVersions] = useState<VersionInfo[]>([]);
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const lan = pathParts[1];

  const formatProjectName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const getLabelColor = (label: string) => {
    switch (label) {
      case "CURRENT":
        return "bg-green-500";
      case "GA":
        return "bg-blue-500";
      case "PRE":
        return "bg-yellow-500";
      case "SNAPSHOT":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getTextByLanguage = () => {
    if (pathname.startsWith("/ko")) {
      return {
        title: "문서",
        description:
          "각 Spring 프로젝트는 고유의 문서를 가지고 있으며, 이 문서는 프로젝트 기능을 사용하는 방법과 달성할 수 있는 것을 자세히 설명합니다.",
      };
    } else if (pathname.startsWith("/ja")) {
      return {
        title: "ドキュメント",
        description:
          "各Springプロジェクトには独自のドキュメントがあり、プロジェクトの機能を使用する方法と、それによって何が達成できるかについて詳しく説明しています。",
      };
    } else {
      return {
        title: "Documentation",
        description:
          "Each Spring project has its own; it explains in great detail how you can use project features and what you can achieve with them.",
      };
    }
  };

  useEffect(() => {
    async function fetchVersions() {
      try {
        const res = await fetch(`/api/spring/versions`);
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          const projectKey = formatProjectName(selectedProject);
          setVersions(data[projectKey] || []);
        } else {
          console.error("Failed to fetch versions data");
        }
      } catch (error) {
        console.error("Error fetching versions data:", error);
      }
    }

    fetchVersions();
  }, [selectedProject]);

  const { title, description } = getTextByLanguage();

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6 leading-normal">{description}</p>
      <table className="w-full text-left border-collapse">
        <tbody>
          {versions.map((versionInfo, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-6">
                <span className="font-semibold">{versionInfo.version}</span>
                {versionInfo.labels.map((label) => (
                  <span
                    key={label}
                    className={`ml-2 px-2 py-1 rounded text-white text-sm ${getLabelColor(
                      label
                    )}`}
                  >
                    {label}
                  </span>
                ))}
              </td>
              <td className="py-4 px-6">
                <a
                  href={versionInfo.refLink}
                  className={`hover:underline ${
                    versionInfo.refLink === "#"
                      ? "text-gray-400 pointer-events-none"
                      : "text-blue-600"
                  }`}
                >
                  Reference Doc.
                </a>
              </td>
              <td className="py-4 px-6">
                <a
                  href={versionInfo.apiLink}
                  className={`hover:underline ${
                    versionInfo.apiLink === "#"
                      ? "text-gray-400 pointer-events-none"
                      : "text-blue-600"
                  }`}
                >
                  Api Doc.
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpringLearn;
