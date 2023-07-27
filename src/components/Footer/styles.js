import styled from 'styled-components';
import { primaryColor, whiteColor } from 'components/UI/variables';

const FooterStyled = styled.div`
  background-color: ${primaryColor};
  color: ${whiteColor};
  padding: 2rem 0;
  column-gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin-top: 1rem;
`;

export { FooterStyled, FooterLinks };
