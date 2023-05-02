import styled from "styled-components";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const CommonPage = (cardList) => {
  const copiedCardList = Object.keys(cardList)
    .map((item) => cardList[item])
    .flat();
  copiedCardList.sort(() => Math.random() - 0.5);

  const [shuffledCard, setShuffledCard] = useState(copiedCardList);

  useEffect(() => {
    setShuffledCard(shuffledCard);
  }, []);

  const handleChoice = (card) => {
    console.log("clicked!");
    console.log(card);
  };

  return (
    <CardContainer>
      {copiedCardList.map((data, idx) => {
        {
          console.log(data);
        }
        return <SingleCard key={idx} data={data} handleChoice={handleChoice} />;
      })}
    </CardContainer>
  );
};

export default CommonPage;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 20rem;
`;
