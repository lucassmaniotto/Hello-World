import styled from 'styled-components';
import { primaryColor, whiteColor, tertiaryColor } from 'components/UI/variables';

const CardAncorContainer = styled.a`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.75fr;

    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 1rem;
    margin: 0 1rem 1rem 0;
    width: 100%;
    
    box-shadow: 2px 2px 4px ${tertiaryColor};
    color: ${whiteColor};
    
    background: -webkit-linear-gradient(${primaryColor}, ${tertiaryColor} 100%);
    background: -moz-linear-gradient(${primaryColor}, ${tertiaryColor} 100%);
    background: -o-linear-gradient(${primaryColor}, ${tertiaryColor} 100%);
    background: linear-gradient(${primaryColor}, ${tertiaryColor} 100%);
    
    -webkit-transition: background 0.35s ease-out;  
    -moz-transition: background 0.35s ease-out;  
    -o-transition: background 0.35s ease-out;  
    transition: background 0.35s ease-out; 
    background-size: 100% 200%;

    &:hover {
        background-position: 100px;
        color: ${whiteColor};
        cursor: pointer;
    }
`;

const CardAncorIcon = styled.img`
    width: 5rem;
    max-height: 5rem;
    margin: 0 auto 1rem;
`;

const CardAncorTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: .5rem;
`;

export { CardAncorContainer, CardAncorIcon, CardAncorTitle };