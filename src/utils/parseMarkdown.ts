import { marked } from 'marked';

export function parseMarkdown(content: string) {
  const tokens = marked.lexer(content);
  const sections = [];
  let currentSection = { header: '', body: '' };

  tokens.forEach(token => {
    if (token.type === 'heading' && token.depth === 2) {
      if (currentSection.header) {
        sections.push(currentSection);
      }
      currentSection = { header: token.text, body: '' };
    } else if (token.type === 'paragraph') {
      currentSection.body += token.text + '\n\n';
    }
  });

  if (currentSection.header) {
    sections.push(currentSection);
  }

  return sections;
}