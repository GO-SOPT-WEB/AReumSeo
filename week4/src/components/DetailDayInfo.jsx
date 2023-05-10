import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImgCard from "./ImgCard";
import ErrorPage from "./ErrorPage";
import useDayFetch from "../hooks/useDayFetch";

const DetailDayInfo = () => {
  const params = useParams();
  const { cityId } = params;

  const [detailCardList, isLoading, isError] = useDayFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`
  );

  return (
    <CardListWrapper>
      {(detailCardList.length !== 0 && !isError) || !isError ? (
        <ImgCard data={detailCardList} cityId={cityId} isLoading={isLoading} />
      ) : (
        <ErrorPage cityId={cityId} />
      )}
    </CardListWrapper>
  );
};

export default DetailDayInfo;

const CardListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 1rem;
  margin-top: -6rem;
`;
