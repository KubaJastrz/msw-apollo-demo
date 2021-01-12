module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],

    'prettier/prettier': 'warn',
  },
}
