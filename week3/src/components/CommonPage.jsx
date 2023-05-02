import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import SingleCard from "./SingleCard";

const CommonPage = (cardList) => {
  // useMemo() 활용하여 cardList가 변경되지 않을 경우, 이전 값을 재사용하도록 구현
  const copiedCardList = useMemo(() => {
    const copied = Object.keys(cardList)
      .map((item) => cardList[item])
      .flat();
    return copied.sort(() => Math.random() - 0.5);
  }, [cardList]);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const handleChoice = (card) => {
    console.log("clicked!");

    // 값이 null이 아니면 이미 해당 값은 선택되어 있다는 것
    // choiceOne에 값이 할당되어 있다면 choiceTwo의 값을 업데이트
    // choiceOne에 값이 할당되어 있지 않다면 choiceOne의 값을 업데이트
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.name === choiceTwo.name) {
        console.log("those cards match");
      } else {
        console.log("fail");
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <CardContainer>
      {copiedCardList.map((data, idx) => {
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
