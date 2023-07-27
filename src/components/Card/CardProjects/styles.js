import styled from 'styled-components';
import { secondaryFont, primaryColor } from 'components/UI/variables';

const CardProjectContainer = styled.div`
  text-align: center;
  width: 282px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-bottom: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translate(0, -1rem);
  }

  @media screen and (max-width: 1100px) {
    width: 336px;
  }

  label {
    display: block;
    margin: 0px;
  }
`;

const CardProjectCover = styled.img`
  width: 100%;
`;

const CardProjectTitle = styled.h2`
  font-family: ${secondaryFont};
  font-size: 1.25rem;
  color: ${primaryColor};
  line-height: 1.75rem;
  margin: 1.5rem 0;

  @media screen and (max-width: 1100px) {
    font-weight: 600;
  }
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: ${({ type }) => {
    switch (type) {
      case 'frontend':
        return '#61dafb';
      case 'backend':
        return '#32cd32';
      case 'database':
        return '#fcd53f';
      case 'tools':
        return '#a537f0';
      case 'web':
        return '#ff7f50';
      case 'desktop':
        return '#e91e63';
      default:
        return 'gray';
    }
  }};
`;

export { CardProjectContainer, CardProjectCover, CardProjectTitle, Tag };
