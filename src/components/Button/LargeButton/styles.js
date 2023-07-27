import styled from 'styled-components';
import { fourthColor, primaryColor, whiteColor } from 'components/UI/variables';

const Button = styled.button`
  display: inline-block;
  border-radius: 24px;
  padding: 1.25rem 2.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  background-color: ${fourthColor};
  color: ${whiteColor};
  border: 3px solid ${fourthColor};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${primaryColor};
    border: 3px solid ${fourthColor};
    transition: 0.5s;
  }
`;

export default Button;
