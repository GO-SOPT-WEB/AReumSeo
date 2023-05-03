import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import SingleCard from "./SingleCard";
import Header from "./Header";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

const CommonPage = (cardList) => {
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [counter, setCounter] = useState(0);
  const [modalOn, setModalOn] = useState(false);

  const flippedCard = document.getElementsByClassName("flipped");

  // useMemo() 활용하여 cardList가 변경되지 않을 경우, 이전 값을 재사용하도록 구현
  const copiedCardList = useMemo(() => {
    setCounter(0);
    // JSON.parse(JSON.stringify(obj)): 깊은 복사가 가능하게 하여 한쪽을 수정하여도 다른 쪽 객체가 똑같이 수정(참조)되지 않도록 해줌
    const copied = JSON.parse(
      JSON.stringify(
        // Object.keys(): 객체를 문자열 배열로 변환
        Object.keys(cardList)
          .map((item) => cardList[item])
          // flat(): 하나의 배열로 만들고자 사용
          .flat()
      )
    );
    // 카드 선택을 하다가 중간에 reset 버튼이나 레벨 선택을 다시 하면 이전에 저장되어 있던 카드 선택 정보 모두 삭제
    copied.map((it) => (it.matched = false));

    return copied.sort(() => Math.random() - 0.5);
  }, [cardList]);

  // 값이 null이 아니면 이미 해당 값은 선택되어 있다는 것
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.name === choiceTwo.name) {
        setChoiceOne((choiceOne.matched = true));
        setChoiceTwo((choiceTwo.matched = true));
        setCounter((prev) => prev + 1);
        resetTurn();
        flippedCard.length === copiedCardList.length
          ? setModalOn(true)
          : setModalOn(false);
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo, flippedCard, copiedCardList]);

  // 두 개의 카드가 선택된 후, 각 카드 정보 초기화
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <>
      <Header counter={counter} length={copiedCardList.length / 2} />
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

      {modalOn && (
        <ModalPortal>
          <Modal onClose={() => setModalOn(false)} />
        </ModalPortal>
      )}
    </>
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
