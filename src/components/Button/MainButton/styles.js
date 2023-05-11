import styled from 'styled-components';
import { fourthColor, whiteColor, primaryColor } from 'components/UI/variables';

const Button = styled.button`
    display: inline-block;
    border-radius: 24px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.125rem;
    background-color: ${fourthColor};
    color: ${whiteColor};
    border: 3px solid ${fourthColor};
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${primaryColor};
        border: 3px solid ${primaryColor};
        transition: 0.5s
    }
`;

export { Button };