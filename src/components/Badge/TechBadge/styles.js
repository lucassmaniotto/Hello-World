import styled from 'styled-components';

const TechBadgeWrapper = styled.div`
  margin: 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechBadgeIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

const TechBadgeName = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  text-align: center;

  @media (max-width: 744px) {
    font-size: 1rem;
  }
`;

export { TechBadgeWrapper, TechBadgeIcon, TechBadgeName };
