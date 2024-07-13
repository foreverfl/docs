const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, 'README.adoc');
const outputPath = path.join(__dirname, 'src', 'components', 'sections.json');

fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading README.adoc:', err);
        return;
    }

    const sections = [];
    const lines = data.split('\n');
    let currentSection = null;

    lines.forEach(line => {
        if (line.startsWith('== ')) {
            if (currentSection) {
                sections.push(currentSection);
            }
            const titles = line.substring(3).split(' / ');
            currentSection = {
                title: {
                    en: titles[0].trim(),
                    ja: titles[1].trim(),
                    ko: titles[2].trim(),
                },
                items: [],
            };
        } else if (line.startsWith('* ')) {
            const label = line.substring(2).trim();
            currentSection.items.push({
                label,
                links: [],
            });
        } else if (line.startsWith('** link:')) {
            const urlMatch = line.match(/link:(.*?)\[(.*?)\]/);
            if (urlMatch) {
                const url = urlMatch[1];
                const lang = urlMatch[2];
                currentSection.items[currentSection.items.length - 1].links.push({
                    lang,
                    url,
                });
            }
        }
    });

    if (currentSection) {
        sections.push(currentSection);
    }

    fs.writeFile(outputPath, JSON.stringify(sections, null, 2), 'utf8', err => {
        if (err) {
            console.error('Error writing sections.json:', err);
            return;
        }
        console.log('sections.json has been saved.');
    });
});