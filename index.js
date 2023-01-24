module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        '@vue/typescript/recommended',
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
    },
    rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 5
            },
        }],
        'vue/singleline-html-element-content-newline': 'off'
    },

    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};