import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    border-radius: 24px;
    padding: 1.25rem 2.5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    background-color: var(--blue);
    color: var(--white);
    border: 3px solid var(--blue);
    cursor: pointer;
    transition: 0.2s;
    
    &:hover {
        background-color: var(--dark-blue);
        border: 3px solid var(--blue);
        transition: 0.5s
    }
`;

export { Button };