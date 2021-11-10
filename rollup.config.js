import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const devDeps = Object.keys(pkg.devDependencies || {})
const deps = Object.keys(pkg.dependencies || {}).concat(devDeps)

/** @type {import('rollup').RollupOptions} */
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'default'
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    external: (name, fpath) => /node_modules/.test(fpath) || deps.includes(name),
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
    ]
  }
]

export default config
