import Markdown from 'markdown-it'
import monaco from '../src'

export default function compiler(source: string): string {
  const md = new Markdown()
  md.use(monaco)
  const html = md.render(source)
  return html
}
