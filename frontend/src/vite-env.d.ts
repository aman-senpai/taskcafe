/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_POLLING?: string;
  readonly VITE_NODE_ENV?: string;
  readonly VITE_LOG_LEVEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
