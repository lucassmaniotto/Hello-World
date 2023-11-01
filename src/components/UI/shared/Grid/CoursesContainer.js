import styled from 'styled-components';
import { grayColor } from '../../variables';

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1364px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1118px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 908px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 483px) {
    grid-template-columns: 1fr;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${grayColor};
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 13px;
  }
`;

const SearchSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${grayColor};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: #828482;

  &:focus {
    outline: none;
  }

  option {
    font-size: 13px;
  }
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 1rem;
`;

export { CoursesContainer, SearchInput, SearchSelect, SearchContainer };
