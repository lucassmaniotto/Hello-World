import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
      <ContentContainer>
        <TextError404>404</TextError404>
        <Title>Ops! Página não encontrada.</Title>
        <Text>Tem certeza de que era isso que você estava procurando?</Text>
        <Text>
          Aguarde uns instantes e recarregue a página ou volte para a página
          inicial
        </Text>
        <ButtonContainer onClick={() => navegate(-1)}>
          <LargeButton>Voltar</LargeButton>
        </ButtonContainer>
        <ImageDog
          src={error404}
          alt="Cachorro Salsicha usando óculos de grau e mexendo no computador"
        />
      </ContentContainer>
      <BlankSpace />
    </>
  );
}
