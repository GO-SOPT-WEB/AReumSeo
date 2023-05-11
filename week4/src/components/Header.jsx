import styled from "styled-components";

const Header = () => {
  return (
    <WeatherHeader>
      <strong>🌞알미의 기상 예보🌞</strong>
    </WeatherHeader>
  );
};

export default Header;

const WeatherHeader = styled.header`
  display: grid;
  justify-content: left;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
`;
