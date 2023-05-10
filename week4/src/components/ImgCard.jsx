import { WEATHER_TYPE } from "../constants/weather";
import styled from "styled-components";
import default_Img from "../assets/default_Img.gif";
import Skeleton from "./Skeleton";

const ImgCard = (props) => {
  const { data, isLoading, isError } = props;

  const temp = data.main && data.main.temp;
  const feels_like = data.main && data.main.feels_like;
  const maxTemp = data.main && data.main.temp_max;
  const minTemp = data.main && data.main.temp_min;
  const clouds = (data.clouds && data.clouds.all) * 100;

  const weatherToday = JSON.stringify(
    data.weather && data.weather[0].description
  );
  const filteredDay = WEATHER_TYPE.filter(
    (it) => JSON.stringify(it.description) === weatherToday
  );
  const imgSrc = filteredDay && filteredDay[0] ? filteredDay[0].imgURL : "";

  const onErrorImg = (e) => {
    e.target.src = default_Img;
  };

  return (
    <>
      {isLoading && !isError ? (
        <Skeleton />
      ) : (
        <ImgWrapper>
          <ImgWrapperHeader>
            <strong>
              {data.dt_txt ? data.dt_txt.slice(5, 10) : data.name}
            </strong>
          </ImgWrapperHeader>
          <img src={imgSrc} onError={onErrorImg} />
          <WeatherInfoContainer>
            <WeatherInfo>
              <p>온도</p>
              <p>{temp}</p>
            </WeatherInfo>
            <WeatherInfo>
              <p>체감 온도</p>
              <p>{feels_like}</p>
            </WeatherInfo>
            <WeatherInfo>
              <p>최저/최고</p>
              <p>
                {minTemp}/{maxTemp}
              </p>
            </WeatherInfo>
            <WeatherInfo>
              <p>구름</p>
              <p>{clouds}%</p>
            </WeatherInfo>
          </WeatherInfoContainer>
        </ImgWrapper>
      )}
    </>
  );
};

export default ImgCard;

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
  margin: 1.35rem 0rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

const WeatherInfoContainer = styled.ul`
  display: grid;
  width: 11rem;
  margin: 0;
  padding: 0rem 0.5rem;
`;

const WeatherInfo = styled.li`
  display: flex;
  justify-content: space-between;
`;
