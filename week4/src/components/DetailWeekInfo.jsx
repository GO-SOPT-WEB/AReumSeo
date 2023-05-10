import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImgCard from "./ImgCard";
import styled from "styled-components";
import ErrorPage from "./ErrorPage";

const DetailWeekInfo = () => {
  const params = useParams();
  const { cityId } = params;

  const [detailCardList, setdetailCardList] = useState([]);

  const getDetailCardInfo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.cod === "200") {
          setdetailCardList(
            data.list.filter((it) => it.dt_txt.includes("21:00:00"))
          );
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
        detailCardList &&
        detailCardList.map((data, idx) => <ImgCard key={idx} data={data} />)
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
