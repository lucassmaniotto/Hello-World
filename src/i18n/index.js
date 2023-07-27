import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from './translations/ptBR.json';
import en from './translations/en.json';
import fr from './translations/fr.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBR: ptBR,
    en: en,
    fr: fr,
  },
});

export default i18n;
