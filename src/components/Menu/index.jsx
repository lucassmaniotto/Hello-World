import { useTranslation } from 'react-i18next';
import MenuLink from './MenuLink';
import { LanguageSwitcher } from 'components/LanguageSwitcher';

import { Nav } from './styles';

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
