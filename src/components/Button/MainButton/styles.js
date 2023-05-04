import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    border-radius: 24px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.125rem;
    background-color: var(--blue);
    color: var(--white);
    border: 3px solid var(--blue);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: var(--dark-blue);
        border: 3px solid var(--dark-blue);
        transition: 0.5s
    }
`;

export { Button };