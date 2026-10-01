import './style.css'
import { marked } from 'marked'
import { loadChapters, type Chapter } from './chapters.ts'

const chapters = loadChapters()
const chaptersById = new Map<string, Chapter>(
  chapters.map((chapter) => [chapter.id, chapter]),
)
const firstChapter = chapters[0]

if (!firstChapter) {
  throw new Error('No chapters were found.')
}

const chapterNav = requireElement(
  document.querySelector<HTMLElement>('#chapter-nav'),
  'The page is missing its chapter navigation.',
)
const chapterList = requireElement(
  document.querySelector<HTMLOListElement>('#chapter-list'),
  'The page is missing its chapter list.',
)
const reading = requireElement(
  document.querySelector<HTMLElement>('#reading'),
  'The page is missing its reading area.',
)
const article = requireElement(
  document.querySelector<HTMLElement>('#chapter'),
  'The page is missing its chapter content.',
)

function requireElement<T extends Element>(element: T | null, message: string): T {
  if (!element) {
    throw new Error(message)
  }

  return element
}

renderNavigation(chapters)
showChapterFromHash()

window.addEventListener('hashchange', showChapterFromHash)
window.addEventListener('popstate', showChapterFromHash)

function renderNavigation(chapterListData: Chapter[]): void {
  const items = chapterListData.map((chapter) => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.className = 'chapter-link'
    link.href = `#${chapter.id}`
    link.dataset.chapterId = chapter.id
    link.textContent = `Step ${chapter.number} — ${chapter.title}`
    link.addEventListener('click', (event) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return
      }

      event.preventDefault()
      selectChapter(chapter.id)
    })
    item.append(link)
    return item
  })

  chapterList.replaceChildren(...items)
}

function selectChapter(id: string): void {
  if (!chaptersById.has(id)) {
    return
  }

  if (location.hash !== `#${id}`) {
    history.pushState(null, '', `#${id}`)
  }

  showChapter(id)
}

function showChapterFromHash(): void {
  const requestedId = location.hash.replace(/^#/, '')
  const id = chaptersById.has(requestedId) ? requestedId : firstChapter.id

  if (location.hash !== `#${id}`) {
    history.replaceState(null, '', `#${id}`)
  }

  showChapter(id)
}

function showChapter(id: string): void {
  const chapter = chaptersById.get(id)
  if (!chapter) {
    return
  }

  updateSelected(chapter.id)
  article.innerHTML = marked.parse(chapter.markdown, { async: false })
  resetReadingPosition()
  document.title = `Step ${chapter.number} — ${chapter.title}`
}

function updateSelected(id: string): void {
  const links = chapterList.querySelectorAll<HTMLAnchorElement>('.chapter-link')

  for (const link of links) {
    const selected = link.dataset.chapterId === id
    link.classList.toggle('is-selected', selected)

    if (selected) {
      link.setAttribute('aria-current', 'page')
      revealChapterLink(link)
    } else {
      link.removeAttribute('aria-current')
    }
  }
}

function revealChapterLink(link: HTMLAnchorElement): void {
  const navRect = chapterNav.getBoundingClientRect()
  const linkRect = link.getBoundingClientRect()
  const stickyOffset = 40

  if (linkRect.top < navRect.top + stickyOffset) {
    chapterNav.scrollTop -= navRect.top + stickyOffset - linkRect.top
  } else if (linkRect.bottom > navRect.bottom) {
    chapterNav.scrollTop += linkRect.bottom - navRect.bottom
  }
}

function resetReadingPosition(): void {
  reading.scrollTop = 0
  requestAnimationFrame(() => {
    reading.scrollTop = 0
  })
}
