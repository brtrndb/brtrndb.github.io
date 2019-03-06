module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ['react', 'prettier'],
  extends: ['eslint:recommended', 'prettier', 'prettier/react', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'import/no-unresolved': 0,
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': ['error', 'never']
  }
  // settings: {
  //   'import/resolver': { webpack: { config: './webpack.config.js' } }
  // }
};
