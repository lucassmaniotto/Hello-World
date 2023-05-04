import styled from 'styled-components';

const CardProjectContainer = styled.div`
    text-align: center;
    width: 282px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 1.5rem;
    transition: transform .2s;
    
    &:hover {
        transform: translate(0, -1rem);
    }

    @media screen and (max-width: 1100px) {
        width: 336px;
    }
`;

const CardProjectCover = styled.img`
    width: 100%;
`;

const CardProjectTitle = styled.h2`
    font-family: var(--secondary-font);
    font-size: 1.25rem;
    color: var(--dark-blue);
    line-height: 1.75rem;
    margin: 1.5rem 0 1.75rem;

    @media screen and (max-width: 1100px) {
        font-weight: 600;
    }
`;

export { CardProjectContainer, CardProjectCover, CardProjectTitle };