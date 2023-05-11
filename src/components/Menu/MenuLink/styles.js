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
`;

export { Link };