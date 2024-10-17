module.exports = {
    extends: '@it-incubator/eslint-config',
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'react-hooks/rules-of-hooks': 'off',
    },
}