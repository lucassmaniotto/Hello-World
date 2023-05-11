import styled from 'styled-components';

export const HomeProjectsUl = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    position: relative;
    bottom: 25px;

    @media screen and (max-width: 1100px) {
        margin-top: 0;
        padding: 2rem 1.5rem 3.625rem;
    }

    @media screen and (max-width: 744px) {
        padding: 2rem 1rem 3rem;
    }
`;