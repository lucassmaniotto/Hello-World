import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LargeButton from 'components/Button/LargeButton';

import error404 from 'assets/error_404.png';
import {
  ContentContainer,
  TextError404,
  Title,
  Text,
  ButtonContainer,
  ImageDog,
  BlankSpace,
} from './styles';

export default function NotFound() {
  const navegate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <ContentContainer>
        <TextError404>404</TextError404>
        <Title>{t('404Title')}</Title>
        <Text>{t('404Text-1')}</Text>
        <Text>{t('404Text-2')}</Text>
        <ButtonContainer onClick={() => navegate(-1)}>
          <LargeButton>{t('404Button')}</LargeButton>
        </ButtonContainer>
        <ImageDog src={error404} alt={t('404Alt')} />
      </ContentContainer>
      <BlankSpace />
    </>
  );
}
