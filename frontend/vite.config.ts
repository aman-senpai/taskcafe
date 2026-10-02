import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // babel-plugin-macros runs the `styled-components/macro` transform that
    // create-react-app used to apply through babel-preset-react-app.
    react({ babel: { plugins: ['babel-plugin-macros'] } }),
    tsconfigPaths(),
  ],
  build: {
    // The Go backend embeds this directory through vfsgen (see magefile.go).
    outDir: 'build',
  },
  server: {
    // Replicates the create-react-app "proxy" field: forward the API routes to
    // the Go backend while Vite serves the client.
    proxy: {
      '^/(auth|graphql|users|settings)': {
        target: 'http://localhost:3333',
        ws: true,
      },
    },
  },
});
