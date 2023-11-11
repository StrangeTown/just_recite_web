import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import appLocalstorage from "./utils/appLocalstorage";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  zh: {
    translation: {
      'translation': '译文：',
      'hook': '钩子：',
      'notRemember': '忘记',
      'remember': '记得',
      'display': '英文',
      'settigns': '设置',
      'next': '下一个',
    },
  },
  en: {
    translation: {
      'translation': 'Translation:',
      'hook': 'Hooks:',
      'notRemember': 'Forget',
      'remember': 'Remembered',
      'display': 'English',
      'settigns': 'Settings',
      'next': 'Next',
    },
  },
};

const language = appLocalstorage.getItem(appLocalstorage.keys.language) || 'zh';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;