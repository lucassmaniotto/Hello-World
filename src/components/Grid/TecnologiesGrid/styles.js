import styled from 'styled-components';

const TechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-content: center;
  align-items: center;
  margin: 2rem 3rem;

  @media screen and (max-width: 1315px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 744px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default TechContainer;
