import styled from 'styled-components';
import { pageFontColor, secondaryFont } from 'components/UI/variables';

const PageModelContainer = styled.article`
    color: ${pageFontColor};
    position: relative;
`;

const PageModelPhotoCover = styled.div`
    width: 100%;
    height: 204px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    position: absolute;
    top: 0;
    z-index: -1;

    @media screen and (max-width: 744px) {
        height: 104px;
    }
`;

const PageModelTitle = styled.h2`
    height: 204px;
    font-family: ${secondaryFont};
    padding: 0 7.5rem;
    font-size: 4rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 777px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 744px) {
        height: 104px;
        padding: 0 1rem;
        font-size: 1.25rem;
    }
`;

const PageModelContent = styled.div`
    padding: 2.5rem 7.5rem 4.5rem;

    @media screen and (max-width: 744px) {
        padding: 2rem 1rem 1.5rem;
    }
`;

export { PageModelContainer, PageModelPhotoCover, PageModelTitle, PageModelContent };