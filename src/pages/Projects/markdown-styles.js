import styled from 'styled-components';
import {
  secondaryFont,
  fifthColor,
  whiteMarkdown,
} from 'components/UI/variables';

export const PageMarkdownContainer = styled.div`
  h3,
  h4,
  h5,
  h6 {
    font-family: ${secondaryFont};
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  h4 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: ${fifthColor};
    text-decoration: underline;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 40%;
  }

  ul {
    font-size: 1.5rem;
  }

  ul > li {
    margin: 0.5rem 2rem;
    list-style: disc;
  }
  pre,
  blockquote {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background-color: ${whiteMarkdown};
    border-radius: 5px;
  }

  pre {
    overflow-x: auto;
  }

  @media screen and (max-width: 1500px) {
    img {
      width: 60%;
    }
  }

  @media screen and (max-width: 1180px) {
    img {
      width: 70%;
    }
  }

  @media (max-width: 1100px) {
    p {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 744px) {
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.75rem;
    }

    img {
      width: 100%;
    }

    ul {
      margin: 1rem;
    }

    li {
      font-size: 1rem;
      line-height: 1.75rem;
    }
  }
`;
