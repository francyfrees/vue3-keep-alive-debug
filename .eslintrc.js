const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },

  globals: {
    defineEmits: true,
    document: true,
    localStorage: true,
    GLOBAL_VAR: true,
    window: true,
    defineProps: true,
    defineExpose: true,
    $ref: true
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest', // 支持的es版本
    sourceType: 'module', // 代模块类型，默认为script，我们设置为module
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  rules: {
    'no-undef': 'off', // 关掉，与ts冲突，使用ts检查
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-useless-escape': 'off',
    'no-bitwise': 'off',
    'no-async-promise-executor': 'off',
    'no-param-reassign': ['off'],

    'import/no-unresolved': [0],
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',

    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-router-link-tag-prop': 'off',
    'vue/no-setup-props-destructure': ['off'],
    'vue/script-setup-uses-vars': ['off'],
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
    'vue/v-on-event-hyphenation': 'error',
    // 'vue/no-parsing-error': [
    //   0,
    //   { 'missing-semicolon-after-character-reference': false }
    // ],

    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-unused-vars': [0]
  }
})
