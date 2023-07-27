import styled from 'styled-components';

const Nav = styled.nav`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  @media screen and(max-width: 744px) {
    height: 72px;
  }
`;

export { Nav };
