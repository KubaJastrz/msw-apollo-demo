const fs = require('fs')

const foldersUnderSrc = fs
  .readdirSync('src', {withFileTypes: true})
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],

    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // side effect imports (and styles)
          ['^\\u0000', '^\\u0000.+\\.s?css$'],
          // external packages
          ['^@?\\w'],
          // internal packages
          [`^(${foldersUnderSrc.join('|')})(/.*|$)`],
          [
            // local imports
            '^\\.',
            // local styles
            '^.+\\.s?css$',
          ],
        ],
      },
    ],

    'prettier/prettier': 'warn',
  },
}
