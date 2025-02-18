/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_BRAND_NAME: string;
    VITE_LOGO_PATH: string;
    VITE_NAV_LINK_NAMES: string;
    VITE_NAV_LINK_PATHS: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}  