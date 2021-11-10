import type md from 'markdown-it'
import { source } from 'common-tags'

const regexLines = /{([\d,-\s]+)}/
const regexComma = /\s*,\s*/
const regexHyphen = /\s*-\s*/

export default (md: md) => {
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]

    // const lineNumbers = regexLines.exec(token.info)?.[1]
    //   .split(regexComma)
    //   .map(
    //     v => v.split(regexHyphen).map(it => parseInt(it, 10))
    //   )
    // const langName = token.info.replace(regexLines, '').trim()

    // // console.log({ lineNumbers, langName })
    // token.attrSet('class', `language-${langName}`)
    // const attrs = self.renderAttrs(token)

    const code = md.utils.escapeHtml(token.content).trim()

    const html = source`
      <Code width="600">
      <pre>
      ${code}
      </pre>
      </Code>
    `

    return html + '\n'
  }
}
