/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CARD_DETAILS: string;
    // add other env variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
