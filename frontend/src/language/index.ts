import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import th from "./th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    th: { translation: th },
  },
  lng: "en", // default language
  fallbackLng: "en", // if can not translate use this language
  interpolation: { escapeValue: false },
});

export default i18n;
