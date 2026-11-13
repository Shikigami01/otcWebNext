import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  ...nextCoreWebVitals,
  ...storybook.configs['flat/recommended'],
  prettier,
  globalIgnores(['.next/**', 'out/**', 'storybook-static/**', 'next-env.d.ts']),
]);
