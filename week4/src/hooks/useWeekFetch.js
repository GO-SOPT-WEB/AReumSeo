import { useState, useEffect } from "react";

const useWeekFetch = (initialUrl) => {
  const [detailCardList, setdetailCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDetailCardInfo = () => {
    setIsLoading(true);
    fetch(initialUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.cod === "200") {
          setdetailCardList(
            data.list.filter((it) => it.dt_txt.includes("00:00:00"))
          );
          console.log(detailCardList);
          setTimeout(() => setIsLoading(false), 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailCardInfo();
  }, [initialUrl]);

  return [detailCardList, isLoading];
};

export default useWeekFetch;
