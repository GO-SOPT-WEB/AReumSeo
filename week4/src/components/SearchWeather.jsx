import styled from "styled-components";
import { searchCriteria } from "../constants/searchCriteria";

const SearchWeather = () => {
  return (
    <SearchHeader>
      <SearchCriteriaSection>
        {searchCriteria.map((data, idx) => {
          return (
            <SearchCriteriaOption key={idx} value={data.id}>
              {data.name}
            </SearchCriteriaOption>
          );
        })}
      </SearchCriteriaSection>

      <SearchInput placeholder="영어로 도시명 ex) seoul" />

      <SearchButton type="submit">날씨 검색</SearchButton>
    </SearchHeader>
  );
};

export default SearchWeather;

const SearchHeader = styled.div`
  display: flex;
  margin: 7rem 0rem;
`;

const SearchCriteriaSection = styled.select`
  height: 3rem;
  margin-top: 0.6rem;
  padding: 0rem 0.5rem;
  border-radius: 1rem;
  border-style: double;
  border-width: 0.5rem;
  border-color: ${({ theme }) => theme.colors.darkGreen};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: 1.1rem;
`;

const SearchCriteriaOption = styled.option``;

const SearchInput = styled.input`
  width: 17rem;
  padding: 1.3rem 1rem;
  margin: 0rem 1.3rem;
  border: 0;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.mint};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: 1.3rem;
`;

const SearchButton = styled.button`
  height: 3.5rem;
  margin-top: 0.3rem;
  padding: 1rem;
  border: 0;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: 1.2rem;
`;
