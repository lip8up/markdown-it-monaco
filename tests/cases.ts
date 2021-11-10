import { source } from 'common-tags'

export default [
  {
    name: 'export-default-arrow-function',
    input: source`
      \`\`\`js { 1, 2-8, 16-19 }
      const a = b
      \`\`\`

      \`\`\`ts
      const list = [1, 2, 3]
      \`\`\`

      \`\`\`js
      const map = { a: 1, b: 2 }
      const name = 'xxx'
      \`\`\`

      inline code: \`sum\`
    `,
    output: source`
    `,
  }
]
