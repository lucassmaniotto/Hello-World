import styled from 'styled-components';
import { secondaryFont, blackMarkdown } from '../../components/UI/variables';

const TitleOtherProjects = styled.h2`
  font-family: ${secondaryFont};
  color: ${blackMarkdown};
  font-size: 2.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const RecommendedProjectsUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export { TitleOtherProjects, RecommendedProjectsUl };
