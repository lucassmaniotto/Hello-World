import styled from 'styled-components';
import { secondaryFont, primaryColor, tertiaryColor } from 'components/UI/variables';

export const AboutMePhoto = styled.img`
    margin-bottom: .5rem;
    margin-left: 1.5rem;
    width: 35vw;
    float: right;

    @media screen and (max-width: 1100px) {
        float: none;
        display: block;
        margin: 0 auto 2rem;
        width: 70vw;
    }

    @media screen and (max-width: 744px) {
        width: 100%;
    }
`;

export const AboutMeSubTitle = styled.h3`
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-family: ${secondaryFont};

    @media screen and (max-width: 744px) {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 1.5rem;
    }
`;

export const AboutMeText = styled.p`
    text-align: justify;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 1100px) {    
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 744px) {
        font-size: 1rem;
        line-height: 1.75rem;
    }
`;

export const AboutMeAncor = styled.a`
    color: var(--dark-blue);
    font-weight: 700;

    &:hover {
        color: ${tertiaryColor};
        text-shadow: 1px 1px 1px ${primaryColor};
        transition: all .3s ease-in-out;
    }
`;