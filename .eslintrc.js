module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {},
    settings: {
        react: {
            version: 'detect',
        },
    },
};
