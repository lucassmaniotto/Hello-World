import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

import { FooterStyled, FooterLinks } from './styles';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <FooterStyled>
      <p>
        {t('footer-1')}{' '}
        <a
          href="https://github.com/lucassmaniotto"
          target="_blank"
          rel="noreferrer"
        >
          {t('footer-2')}
        </a>{' '}
        😃
      </p>
      <FooterLinks>
        <a href="https://github.com/lucassmaniotto">
          <AiFillGithub size={25} />
        </a>
        <a href="https://www.instagram.com/licaaaaaas">
          <AiOutlineInstagram size={25} />
        </a>
        <a href="https://twitter.com/alpiste_punk">
          <AiOutlineTwitter size={25} />
        </a>
      </FooterLinks>
    </FooterStyled>
  );
}
