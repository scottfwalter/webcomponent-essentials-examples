import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  open: true,
  nodeResolve: true,
  // appIndex: './index.html',
  rootDir: './',
  plugins: [esbuildPlugin({ ts: true })]
};