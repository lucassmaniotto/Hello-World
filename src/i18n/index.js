import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from './translations/ptBR.json';
import en from './translations/en.json';
import es from './translations/es.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBR,
    en,
    es,
  },
});

export default i18n;
