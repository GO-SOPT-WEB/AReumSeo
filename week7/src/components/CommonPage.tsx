import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import SingleCard from "./SingleCard";
import Header from "./Header";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

export interface CommonPageProps {
  cardList: Array<object>;
}

const CommonPage = (props: CommonPageProps) => {
  const { cardList } = props;

  const [choiceOne, setChoiceOne] = useState<any>(null);
  const [choiceTwo, setChoiceTwo] = useState<any>(null);
  const [counter, setCounter] = useState<number>(0);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const flippedCard = document.getElementsByClassName("flipped");

  // useMemo() 활용하여 cardList가 변경되지 않을 경우, 이전 값을 재사용하도록 구현
  const copiedCardList = useMemo(() => {
    setCounter(0);
    // JSON.parse(JSON.stringify(obj)): 깊은 복사
    const copied = JSON.parse(
      JSON.stringify(
        // Object.keys(): 객체를 문자열 배열로 변환
        (Object.keys(cardList) as Array<keyof typeof cardList>)
          .map((item) => cardList[item])
          // flat(): 하나의 배열로 만들고자 사용
          .flat()
      )
    ) as number[];
    // 카드 선택을 하다가 중간에 reset 버튼이나 레벨 선택을 다시 하면 이전에 저장되어 있던 카드 선택 정보 모두 삭제
    copied.map((it: any) => (it.matched = false));

    return copied.sort(() => Math.random() - 0.5);
  }, [cardList]);

  // 값이 null이 아니면 이미 해당 값은 선택되어 있다는 것
  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      // 두 개의 카드가 같은지 확인하는 동안 다른 카드 선택 불가
      setDisabled(true);

      if (choiceOne.name === choiceTwo.name) {
        setChoiceOne((choiceOne.matched = true));
        setChoiceTwo((choiceTwo.matched = true));
        setCounter((prev) => prev + 1);
        resetTurn();

        flippedCard.length === copiedCardList.length
          ? setModalOn(true)
          : setModalOn(false);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, flippedCard, copiedCardList]);

  // 두 개의 카드가 선택된 후, 각 카드 정보 초기화
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    // 검사가 끝나면 다른 카드 선택 가능
    setDisabled(false);
  };

  return (
    <>
      <Header counter={counter} length={copiedCardList.length / 2} />
      <CardContainer>
        {copiedCardList.map((data: any, idx: number) => {
          return (
            <SingleCard
              key={idx}
              data={data}
              handleChoice={handleChoice}
              flipped={data === choiceOne || data === choiceTwo || data.matched}
              disabled={disabled}
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

  margin: 20rem 7rem 0rem;
`;
