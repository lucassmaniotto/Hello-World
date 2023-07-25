import React from "react";
import { useTranslation } from "react-i18next";

import br from "../../assets/flags/br.svg";
import us from "../../assets/flags/us.svg";
import fr from "../../assets/flags/fr.svg";

import { LanguageButton, LanguageSwitcherWrapper } from "./styles";

const languageOptions = [
  {
    name: "PT-BR",
    value: "ptBR",
    flag: br,
  },
  {
    name: "EN-US",
    value: "en",
    flag: us,
  },
  {
    name: "FR-FR",
    value: "fr",
    flag: fr,
  },
];

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <LanguageSwitcherWrapper>
      {languageOptions.map((language) => (
        <LanguageButton
          key={language.value}
          selected={i18n.language === language.value}
          onClick={() => i18n.changeLanguage(language.value)}
        >
          <img src={language.flag} alt={language.name} />
          <span>{t(language.name)}</span>
        </LanguageButton>
      ))}
    </LanguageSwitcherWrapper>
  );
};
