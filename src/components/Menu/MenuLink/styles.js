import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { mainFontColor } from 'components/UI/variables';

const Link = styled(NavLink)`
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${mainFontColor};

  &.active {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.875rem;
  }
`;

export { Link };
