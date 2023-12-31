import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en.json";

const fallbackLng = ["en"];
const availableLanguages = ["en"];

const resources = {
  en: {
    translation: EN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,

  detection: {
    checkWhitelist: true,
  },

  debug: false,

  whitelist: availableLanguages,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
