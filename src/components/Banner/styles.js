import styled from 'styled-components';

const BannerContainer = styled.div`
    padding: 3rem 7.5rem 6.25rem;
    background-color: var(--dark-blue);
    color: var(--white);
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1100px) {
        padding: 3.5rem 1.5rem;
    }

    @media screen and (max-width: 744px) {
        padding: 2rem 1rem;
        display: block;
    }
`;

const BannerText = styled.div`
    h1 {
        font-family: var(--secondary-font);
        font-size: 4rem;
        margin-top: 4.875rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: var(--secondary-font);
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 1100px) {
        h1 {
            margin-top: 0;
            margin-bottom: 1.5rem;
        }

        p {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 744px) {
        h1 {
            margin-bottom: 2rem;
        }

        p {
            margin-bottom: 2rem;
        }
    }
`;

const BannerImage = styled.div`
    position: relative;
    height: 406px;

    & .photo {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 18vw;
        border-radius: 50%;
    }

    & .colored-circle {
        position: absolute;
        right: 7vw;
        bottom: 2.2vw;
        width: 25vw;
    }

    @media screen and (max-width: 1100px) {
        height: 338px;

        & .photo {
            width: 25vw;
        }

        & .colored-circle {
            right: 10vw;
            width: 35vw;
        }
    }

    @media screen and (max-width: 744px) {
        height: 307px;

        & .photo, & .colored-circle {
            left: 0;
            right: 0;
            margin: 0 auto;
        }

        & .photo {
            width: 170px;
            transform: translate(4rem, 0px);
        }

        & .colored-circle {
            width: 240px;
            transform: translate(-1.5rem, 0px);
        }
    }
`;

export { BannerContainer, BannerText, BannerImage };