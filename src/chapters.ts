/**
 * Loads the 64 study chapters from src/md-files.
 *
 * import.meta.glob asks Vite for every matching Markdown file as raw text,
 * so the app does not need one import statement per chapter.
 */

export interface Chapter {
  /** URL hash id, for example "step-01". */
  id: string
  number: number
  /** Title after "Step N —", taken from the chapter heading. */
  title: string
  markdown: string
}

const chapterFiles = import.meta.glob('./md-files/step-*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const filePattern = /step-(\d+)\.md$/

export function loadChapters(): Chapter[] {
  const chapters: Chapter[] = []

  for (const [path, markdown] of Object.entries(chapterFiles)) {
    if (typeof markdown !== 'string') {
      throw new Error(`Could not read chapter file as text: ${path}`)
    }

    const fileMatch = path.match(filePattern)
    if (!fileMatch) {
      continue
    }

    const number = Number(fileMatch[1])
    chapters.push({
      id: `step-${String(number).padStart(2, '0')}`,
      number,
      title: extractTitle(markdown, number),
      markdown,
    })
  }

  chapters.sort((left, right) => left.number - right.number)
  assertChapterSequence(chapters)
  return chapters
}

/**
 * Reads the chapter title from its Step heading.
 *
 * The pattern requires the ladder marker used by real chapters (or no marker,
 * as in Step 64). Practice headings inside a chapter, such as "🧱 Step 1",
 * do not match and stay part of that chapter's body.
 *
 * Step 1 has two Step headings: a document title, then the chapter title.
 */
function extractTitle(markdown: string, number: number): string {
  const stepHeading = /^#{1,6} \*\*(?:🪜 )?Step (\d+) — (.+?)\*\*\s*$/gm
  const titles: string[] = []

  for (const match of markdown.matchAll(stepHeading)) {
    const headingNumber = Number(match[1])
    const headingTitle = match[2]
    if (headingNumber === number && headingTitle) {
      titles.push(cleanTitle(headingTitle))
    }
  }

  if (number === 1 && titles.length > 1 && titles[1]) {
    return titles[1]
  }

  return titles[0] ?? `Step ${number}`
}

function cleanTitle(title: string): string {
  return title.replace(/[`*]/g, '').trim()
}

function assertChapterSequence(chapters: Chapter[]): void {
  if (chapters.length !== 64) {
    throw new Error(`Expected 64 chapter files, but found ${chapters.length}.`)
  }

  chapters.forEach((chapter, index) => {
    if (chapter.number !== index + 1) {
      throw new Error('Chapter files must run from step-01.md through step-64.md.')
    }
  })
}
