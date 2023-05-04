import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: var(--main-font-color);

    &.active {
        text-decoration: underline;

    }
`;

export { Link };