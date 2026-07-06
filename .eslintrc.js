/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // Allow <img> tags (used for devicon CDN and portrait photo)
    '@next/next/no-img-element': 'off',
    // Allow custom fonts in layout (not just _document.js)
    '@next/next/no-page-custom-font': 'off',
    // Allow unescaped entities (handled via &apos; etc.)
    'react/no-unescaped-entities': 'off',
  },
};

module.exports = eslintConfig;
