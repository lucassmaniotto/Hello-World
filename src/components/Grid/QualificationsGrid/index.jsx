import CardAncor from '../../Card/CardAncor';

import { CoursesContainer } from 'components/UI/shared/Grid/CoursesContainer';

export default function QualificationsGrid() {
  return (
    <CoursesContainer>
      <CardAncor
        title={"Bacharelado em Ciência da Computação"}
        paragraph={"Universidade Federal da Fronteira Sul - Chapecó/SC"}
        date={"2021 - Atualmente"}
        link={"https://cc.uffs.edu.br/"}
        icon={"https://cc.uffs.edu.br/images/avatars/coordenacao.png"}
      />
      <CardAncor
        title={"Formação React com JavaScript"}
        paragraph={"Alura"}
        date={"31/01/2023"}
        link={"https://cursos.alura.com.br/degree/certificate/e3daef71-12e9-4253-81cc-0cc4c6ecbfee"}
        icon={"https://www.alura.com.br/assets/api/formacoes/categorias/front-end.svg"}
      />
      <CardAncor
        title={"Formação JavaScript para Front-end"}
        paragraph={"Alura"}
        date={"02/01/2023"}
        link={"https://cursos.alura.com.br/degree/certificate/e073304a-fc7f-4c88-97fd-12864f221ef7"}
        icon={"https://www.alura.com.br/assets/api/formacoes/categorias/front-end.svg"}
      />
      <CardAncor
        title={"Formação HTML e CSS"}
        paragraph={"Alura"}
        date={"29/11/2022"}
        link={"https://cursos.alura.com.br/degree/certificate/3b13b8ca-42a3-4491-b003-4ab0bacedcbe"}
        icon={"https://www.alura.com.br/assets/api/formacoes/categorias/front-end.svg"}
      />
      <CardAncor
        title={"Formação QA: processos e automação de testes"}
        paragraph={"Alura"}
        date={"04/08/2022"}
        link={"https://cursos.alura.com.br/degree/certificate/465bbfb9-30e8-4b65-907d-326218ebf87f"}
        icon={"https://www.alura.com.br/assets/api/formacoes/categorias/programacao.svg"}
      />
      <CardAncor
        title={"Formação JavaScript para Back-end"}
        paragraph={"Alura"}
        date={"31/10/2022"}
        link={"https://cursos.alura.com.br/degree/certificate/c355e96a-817b-40d2-9150-3cbda076bd64"}
        icon={"https://www.alura.com.br/assets/api/formacoes/categorias/programacao.svg"}
      />
    </CoursesContainer>
  )
}
