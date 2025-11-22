import { createHighlighter, type Highlighter } from 'shiki';

let highlighter: Highlighter | null = null;

export async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: ['tsx', 'typescript', 'javascript', 'jsx', 'bash', 'css', 'json'],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: string = 'tsx') {
  const hl = await getHighlighter();

  return hl.codeToHtml(code.trim(), {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  });
}
