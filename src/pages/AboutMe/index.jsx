import PagesModel from "components/PagesModel";
import TecnologiesGrid from "components/Grid/TecnologiesGrid";
import CertificatesGrid from "components/Grid/CertificatesGrid";

import { AboutMePhoto, AboutMeSubTitle, AboutMeText, AboutMeAncor } from "./styles";

import photoCover from "assets/about_me_cover.jpg";
import photoAboutMe from "assets/about_me_photo.jpg";
import QualificationsGrid from "components/Grid/QualificationsGrid";

export default function AboutMe() {
  return (
    <>
      <PagesModel
        photoCover={photoCover}
        title="Sobre mim"
      >
        <section>
          <AboutMeSubTitle>Olá, eu sou o Lucas :)</AboutMeSubTitle>
          <AboutMePhoto 
            src={photoAboutMe}
            alt="Foto de Lucas Smaniotto Schuch"
          />
          <AboutMeText>
            Como Obi-Wan Kenobi diria, hello there! Sou estudante de programação em formação, apaixonado por tecnologia e muito interessado em assuntos relacionados a programação Front-end, Back-end e UX & Design. Sempre busco o aperfeiçoamento e o estudo das várias áreas da Computação.
          </AboutMeText>
          <AboutMeText>
            Começei a programar em 2015 em aulas de robótica no meu colégio de ensino médio com Lego Mindstorms e Arduino até 2017 quando me formei. Desde então, decidi me aprofundar mais na área e resolvi cursar Ciência da Computação, onde estou atualmente no 4º semestre do curso de Ciência da Computação da <AboutMeAncor href="https://cc.uffs.edu.br/">Universidade Federal da Fronteira Sul (UFFS)</AboutMeAncor> em Chapecó/SC. Também em meu tempo livre gosto muito de estudar sobre programação e sempre que posso estou fazendo um curso novo da área, seja em plataformas como <AboutMeAncor href="https://www.udemy.com/">Udemy</AboutMeAncor>, <AboutMeAncor href="https://www.alura.com.br/">Alura</AboutMeAncor> ou <AboutMeAncor href="https://www.coursera.org/">Coursera</AboutMeAncor>.
          </AboutMeText>
          <AboutMeText>
            Atualmente estou focado em desenvolvimento Front-end com React e em Back-end com Node. Além disso, tenho conhecimentos nas linguagens C, Java, Python, JavaScript e TypeScript, e conhecimentos em HTML, CSS e SQL. Em breve pretendo me aprofundar mais em UX & Design e também em Back-end relacionado a API's, ja possuindo alguns conhecimentos básicos dos dois, como por exemplo, as ferramentas de edição e o Figma, além do consumo de API's e de bancos de dados relacionais e não relacionais.
          </AboutMeText>
        </section>
          <AboutMeText>
            Além de programar, gosto muito de jogar videogame, principalmente jogos de RPG, como The Witcher, Skyrim, Cyberpunk 2077 e entre outros. Sendo um apaixonado pelo gênero, minha paixão é RPG's de mesa, sejam eles Dungeons & Dragons, Call of Cthulhu, Cyberpunk 2020, Cyberpunk RED, Tormenta20, ou Ordem Paranormal. Uma das coisas que me fizeram um grande fã de RPG foi a trilogia O Senhor dos Anéis, sendo essa os meus livros favoritos. Amo assistir séries e filmes clássicos, desde Star Wars, Blade Runner, Matrix a séries como Friends, Glee, Atlanta, The Office e The Mandalorian, e até desenhos que vão de Cyberpunk Edgerunners até Ursos Sem Curso e The Owl House. Falando em animações, amo todas as obras do Studio Ghibli e meu filme de animação favorito é Into The Spiderverse. Confesso que possuo uma paixão fervorosa por música e sou viciado em criar playlists o tempo todo no meu spotify, me considerando um grande fã de alt-rock, metal, punk, indie e música brasileira, com um pezinho em música eletrônica em geral. (Se quiser me seguir no spotify, meu perfil é <AboutMeAncor href="https://open.spotify.com/user/22gktbankxa4r3eaxarfxdzgi">Lucas Smaniotto</AboutMeAncor>)
          </AboutMeText>
          <AboutMeText>
            Se você chegou até aqui, obrigado por ler e querer me conhecer um pouquinho! Espero que tenha gostado do meu site e que possamos nos conhecer melhor. Se quiser entrar em contato comigo, pode me mandar um e-mail em <AboutMeAncor href="mailto:lucas91755@gmail.com">lucas91755@gmail.com</AboutMeAncor> ou em <AboutMeAncor href="mailto:lucas.schuch@estudante.uffs.edu.br">lucas.schuch@estudante.uffs.edu.br</AboutMeAncor>. Aproveite sua estadia por aqui e volte sempre! :D
          </AboutMeText>
        <section>
          <AboutMeSubTitle>Tecnologias</AboutMeSubTitle>
          <TecnologiesGrid />
        </section>
        <section>
          <AboutMeSubTitle>Formações</AboutMeSubTitle>
          <QualificationsGrid />
          <AboutMeSubTitle>Certificados</AboutMeSubTitle>
          <CertificatesGrid />
        </section>
      </PagesModel>
    </>
  )
}
