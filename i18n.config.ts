import en from "./locales/en";
import es from "./locales/es";

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en-US', 'es-CO', 'en', 'es'],
  locale: 'en-US',
  messages: {
    'en-US': en,
    'es-CO': es,
    en,
    es,
  }
}))
