import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Включите здесь правила из @stylistic/eslint-plugin
      // Например, базовые правила для начала:
      '@stylistic/semi': ['error', 'never'], // Запрещает точки с запятой
      '@stylistic/quotes': ['error', 'single'], // Одинарные кавычки
      '@stylistic/indent': ['error', 2], // Отступ в 2 пробела
      '@stylistic/comma-dangle': ['error', 'always-multiline'], // Висячие запятые
    },
  },
]
