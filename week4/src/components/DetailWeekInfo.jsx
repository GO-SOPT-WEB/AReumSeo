import { useParams } from "react-router-dom";
import ImgCard from "./ImgCard";
import styled from "styled-components";
import ErrorPage from "./ErrorPage";
import useWeekFetch from "../hooks/useWeekFetch";

const DetailWeekInfo = () => {
  const params = useParams();
  const { cityId } = params;

  const [detailCardList, isLoading] = useWeekFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${
      import.meta.env.VITE_APP_WEATHER
    }&units=metric`
  );

  return (
    <CardListWrapper>
      {detailCardList.length !== 0 ? (
        detailCardList &&
        detailCardList.map((data, idx) => (
          <ImgCard key={idx} data={data} isLoading={isLoading} />
        ))
      ) : (
        <ErrorPage cityId={cityId} />
      )}
    </CardListWrapper>
  );
};

export default DetailWeekInfo;

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
