import coloredCircle from 'assets/colored_circle.png';

import { BannerContainer, BannerText, BannerImage } from './styles';

export default function Banner() {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Olá Mundo!</h1>
        <p>Boas vindas ao meu espaço pessoal! Meu nome é Lucas Smaniotto Schuch, sou estudante de Ciência da Computação em formação, e é aqui que você pode conhecer a mim e meus projetos. Espero que goste :)</p>
      </BannerText>
      <BannerImage>
        <img 
          className="colored-circle"
          src={coloredCircle}
          aria-hidden="true"
          alt="Círculo colorido atrás da foto"
          />
        <img 
          className="photo"
          src="https://github.com/lucassmaniotto.png"
          alt="Foto de Lucas Smaniotto Schuch"
        />
      </BannerImage>
    </BannerContainer>
  )
}
