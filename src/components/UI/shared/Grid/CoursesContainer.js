import styled from 'styled-components';

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1364px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1118px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 908px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 483px) {
    grid-template-columns: 1fr;
  }
`;

export default CoursesContainer;
