module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier'
  ],
  env: {
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        }
      }
    ],
    'vue/block-tag-newline': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'prettier/prettier': 'error'
  }
}
