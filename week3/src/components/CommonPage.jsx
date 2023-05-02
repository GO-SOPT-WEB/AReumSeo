import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import SingleCard from "./SingleCard";

const CommonPage = (cardList) => {
  // useMemo() 활용하여 cardList가 변경되지 않을 경우, 이전 값을 재사용하도록 구현
  const copiedCardList = useMemo(() => {
    const copied = Object.keys(cardList)
      .map((item) => cardList[item])
      .flat();

    // 카드 선택을 하다가 중간에 reset 버튼이나 레벨 선택을 다시 하면 이전에 저장되어 있던 카드 선택 정보 모두 삭제
    copied.map((it) => (it.matched = false));

    return copied.sort(() => Math.random() - 0.5);
  }, [cardList]);

  const [turns, setTurns] = useState(0);
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
        setChoiceOne((choiceOne.matched = true));
        setChoiceTwo((choiceTwo.matched = true));

        console.log(copiedCardList);
        resetTurn();
      } else {
        console.log("fail");
        console.log(copiedCardList);
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  // 카드가 짝을 찾은 경우 실행
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
  };

  return (
    <CardContainer>
      {copiedCardList.map((data, idx) => {
        return (
          <SingleCard
            key={idx}
            data={data}
            handleChoice={handleChoice}
            flipped={data === choiceOne || data === choiceTwo || data.matched}
          />
        );
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
