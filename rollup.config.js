import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'
import pkg from './package.json'

let external = Object.keys(pkg.dependencies || {})

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: pkg.exportName
    },
    plugins: [
      vue({
        needMap : false,
        normalizer : '~rollup-plugin-vue/runtime/normalize',
        styleInjector : '~rollup-plugin-vue/runtime/browser',
      }),
      commonjs(),
      resolve(),
      eslint({
        include: ['src/index.js'],
        exclude: ['node_modules/**']
      }),
      babel({
        exclude: ['node_modules/**']
      }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    external: external,
    plugins: [
      vue({
        needMap : false,
        normalizer : '~rollup-plugin-vue/runtime/normalize',
        styleInjector : '~rollup-plugin-vue/runtime/browser',
      }),
      babel({
        exclude: ['node_modules/**']
      }),
      terser()
    ],
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.main,
        format: 'cjs'
      }
    ]
  }
]


