import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export function init(en: any) {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      compatibilityJSON: 'v3',
      resources: {
        en,
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
  return i18n;
}

export default init;
