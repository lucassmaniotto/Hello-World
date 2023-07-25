const { styled } = require("styled-components");

const LanguageButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 5px;
  outline: none;

  img {
    width: 20px;
    height: 20px;
    margin: 5px;
  }

  span {
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  }

  @media (max-width: 480px) {
    margin: 3.5px;
  }
`;

const LanguageSwitcherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;

  @media (max-width: 768px) {
    position: relative;
    right: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media (max-width: 344px) {
    span {
      display: none;
    }
  }
`;

module.exports = {
  LanguageButton,
  LanguageSwitcherWrapper,
};
