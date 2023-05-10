import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImgCard from "./ImgCard";
import ErrorPage from "./ErrorPage";

const DetailDayInfo = () => {
  const params = useParams();
  const { cityId } = params;

  const [detailCardList, setdetailCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDetailCardInfo = () => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.cod === 200) {
          setdetailCardList(data);
          setTimeout(() => setIsLoading(false), 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailCardInfo();
  }, [cityId]);

  return (
    <CardListWrapper>
      {detailCardList.length !== 0 ? (
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
