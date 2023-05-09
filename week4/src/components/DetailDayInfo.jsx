import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailDayInfo = () => {
  const params = useParams();
  const { cityId } = params;

  const [detailCard, setdetailCard] = useState();

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
          setdetailCard(data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailCardInfo();
  }, []);
};

export default DetailDayInfo;
