import styled from "styled-components";
const Skeleton = () => {
  return (
    <ImgWrapper>
      <ImgWrapperHeader></ImgWrapperHeader>

      <ImgContent></ImgContent>

      <WeatherInfoContainer>
        <WeatherInfo></WeatherInfo>
        <WeatherInfo></WeatherInfo>
        <WeatherInfo></WeatherInfo>
        <WeatherInfo></WeatherInfo>
      </WeatherInfoContainer>
    </ImgWrapper>
  );
};

export default Skeleton;

const ImgWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 12rem;
  height: 27.5rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.darkGreen};
`;

const ImgWrapperHeader = styled.header`
  width: 9rem;
  height: 2.5rem;
  margin: 1.35rem 0rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.green};

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

const ImgContent = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: -1rem;
  overflow: hidden;
  position: relative;
  border: 0;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.green};

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

const WeatherInfoContainer = styled.ul`
  display: grid;
  overflow: hidden;
  position: relative;
  width: 10rem;
  height: 11rem;
  margin: 0;
  padding: 0rem 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.green};

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

const WeatherInfo = styled.li`
  display: flex;
  justify-content: space-between;
`;
