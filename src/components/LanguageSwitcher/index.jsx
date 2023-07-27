import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import br from '../../assets/flags/br.svg';
import us from '../../assets/flags/us.svg';
import fr from '../../assets/flags/fr.svg';

import { LanguageButton, LanguageSwitcherWrapper } from './styles';

const languageOptions = [
  {
    name: 'PT-BR',
    value: 'ptBR',
    flag: br,
  },
  {
    name: 'EN-US',
    value: 'en',
    flag: us,
  },
  {
    name: 'FR-FR',
    value: 'fr',
    flag: fr,
  },
];

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (
      savedLanguage &&
      languageOptions.some((option) => option.value === savedLanguage)
    ) {
      i18n.changeLanguage(savedLanguage);
    } else {
      i18n.changeLanguage('ptBR');
    }
  }, [i18n]);

  const handleLanguageChange = (languageValue) => {
    i18n.changeLanguage(languageValue);
    localStorage.setItem('selectedLanguage', languageValue);

    if (location.pathname.startsWith('/projects/')) {
      navigate(location.pathname, { replace: true });
    }
  };

  return (
    <LanguageSwitcherWrapper>
      {languageOptions.map((language) => (
        <LanguageButton
          key={language.value}
          selected={i18n.language === language.value}
          onClick={() => handleLanguageChange(language.value)}
        >
          <img src={language.flag} alt={language.name} />
          <span>{t(language.name)}</span>
        </LanguageButton>
      ))}
    </LanguageSwitcherWrapper>
  );
}

export default LanguageSwitcher;
