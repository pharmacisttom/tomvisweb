import nextConfig from 'eslint-config-next';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**'],
  },
  ...nextConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];
