import styled from 'styled-components';
import { primaryColor, whiteColor, secondaryFont, fourthColor } from 'components/UI/variables';

export const ContentContainer = styled.div`
    position: relative;
    text-align: center;
    background-color: ${primaryColor};
    color: ${whiteColor};
    padding: 0 1.5rem 6.5rem;

    @media screen and (max-width: 744px) {
        padding: 3rem 1rem 17rem;
    }
`;

export const TextError404 = styled.span`
    display: block;
    color: ${fourthColor};
    font-family: ${secondaryFont};
    font-size: 6rem;
    font-weight: 700;
    margin-bottom: 2rem;

    @media screen and (max-width: 1100px) {
        margin-bottom: 2.25rem;
    }

    @media screen and (max-width: 744px) {
        font-size: 4rem;
    }
`;

export const Title = styled.h1`
    font-family: ${secondaryFont};
    font-size: 3rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 744px) {
        font-size: 2.25rem;
        line-height: 3rem;
    }
`;

export const Text = styled.p`
    font-size: 1.5rem;
    line-height: 1.75rem;

    @media screen and (max-width: 744px) {
        font-size: 1.125rem;
        line-height: 1.3125rem;
    }
`;

export const ButtonContainer = styled.div`
    text-align: start;
    margin-top: 3.5rem;
    margin-left: 30vw;
    margin-bottom: 2.5rem;

    @media screen and (max-width: 1100px) {
        margin-top: 2.75rem;
        margin-left: 15vw;
    }

    @media screen and (max-width: 744px) {
        margin: 2.5rem 0 0;
        text-align: center;
    }
`;

export const ImageDog = styled.img`
    position: absolute;
    height: 25vw;
    bottom: calc(-25vw * 0.5);

    @media screen and (max-width: 1100px) {
        width: 60vw;
        height: 50vw;
        bottom: calc(-50vw * 0.65);
        left: 40vw;
    }

    @media screen and (max-width: 744px) {
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        height: 94vw;
        bottom: calc(-94vw * 0.3);
        width: 100vw;
        max-height: 375px;
        max-width: fit-content;
    }
`;

export const BlankSpace = styled.div`
    height: 40vh;

    @media screen and (max-width: 1100px) {
        height: 53vh;
    }

    @media screen and (max-width: 744px) {
        height: calc(94vw * 0.5);
    }
`;