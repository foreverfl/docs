import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readmePath = path.join(__dirname, 'list.md');
const outputPath = path.join(__dirname, 'src', 'components', 'sections.json');

const data = await readFile(readmePath, 'utf-8');
const lines = data.split('\n');

const sections = [];
let currentSection = null;

for (let line of lines) {
  // Section 시작
  if (line.startsWith("## ")) {
    if (currentSection) sections.push(currentSection);
    currentSection = {
      title: line.replace(/^##\s*/, "").trim(),
      items: [],
    };
  }

  // - [ToolName](URL) <!-- o -->
  else if (line.trim().startsWith("- [")) {
    const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const label = match?.[1]?.trim() || "";
    const url = match?.[2]?.trim() || "";
    const translatable = /<!--\s*o\s*-->/.test(line);

    currentSection?.items.push({
      label,
      link: url,
      translatable,
    });
  }
}

// 마지막 섹션 처리
if (currentSection) sections.push(currentSection);

// 결과 저장
await writeFile(outputPath, JSON.stringify(sections, null, 2), "utf-8");
console.log("✅ sections.json has been generated at", outputPath);