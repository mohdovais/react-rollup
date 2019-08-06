module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        commonjs: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {},
    settings: {
        react: {
            version: 'detect',
        },
    },
};
