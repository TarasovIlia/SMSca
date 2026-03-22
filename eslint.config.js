import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import solid from 'eslint-plugin-solid'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // 1. Base JS
  js.configs.recommended,

  // 2. TypeScript
  ...tseslint.configs.recommended,

  // 3. General settings
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // 4. Node / config files
  {
    files: ['**/*.cjs', 'tailwind.config.js'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // 5. Solid
  {
    files: ['**/*.{jsx,tsx}'],
    ...solid.configs['flat/typescript'],
  },

  // 6. Accessibility
  {
    files: ['**/*.{jsx,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },

  // 7. Prettier
  prettier,
])
