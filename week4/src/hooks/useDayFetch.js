import { useState, useEffect } from "react";

const useDayFetch = (initialUrl) => {
  const [detailCardList, setdetailCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getDetailCardInfo = () => {
    setIsLoading(true);
    setIsError(false);

    fetch(initialUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.cod === 200) {
          setdetailCardList(data);
          setTimeout(() => setIsLoading(false), 1000);
          setIsError(false);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailCardInfo();
  }, [initialUrl]);

  return [detailCardList, isLoading, isError];
};

export default useDayFetch;
