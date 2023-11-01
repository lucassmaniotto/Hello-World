import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import MenuLink from './MenuLink';

import Nav from './styles';

export default function Menu() {
  const { t } = useTranslation();

  return (
    <header>
      <Nav>
        <MenuLink to="/">{t('nav-home')}</MenuLink>
        <MenuLink to="/about">{t('nav-about')}</MenuLink>
        <LanguageSwitcher />
      </Nav>
    </header>
  );
}
