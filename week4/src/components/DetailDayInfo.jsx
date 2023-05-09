import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImgCard from "./ImgCard";

const DetailDayInfo = () => {
  const params = useParams();
  const { cityId } = params;
  const [detailCardList, setdetailCardList] = useState([]);

  const getDetailCardInfo = () => {
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
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailCardInfo();
  }, []);

  return (
    <CardListWrapper>
      <ImgCard data={detailCardList} />
    </CardListWrapper>
  );
};

export default DetailDayInfo;

const CardListWrapper = styled.section``;
