import styled from "styled-components";
import { useEffect, useMemo } from "react";
import SingleCard from "./SingleCard";
import Header from "./Header";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import { useRecoilState } from "recoil";
import {
  choiceOneState,
  choiceTwoState,
  scoreState,
  modalOnState,
  disabledState,
} from "../atom/commonPageAtom";

export interface CardImgListProps {
  name?: string;
  alt?: string;
  matched: boolean;
}

export interface CommonPageProps {
  cardList: CardImgListProps[];
  shuffle: number;
}

const CommonPage = (props: CommonPageProps) => {
  const { cardList, shuffle } = props;

  const [choiceOne, setChoiceOne] = useRecoilState(choiceOneState);
  const [choiceTwo, setChoiceTwo] = useRecoilState(choiceTwoState);
  const [score, setScore] = useRecoilState(scoreState);
  const [modalOn, setModalOn] = useRecoilState(modalOnState);
  const [disabled, setDisabled] = useRecoilState(disabledState);
  const flippedCard = document.getElementsByClassName("flipped");

  const copiedCardList = useMemo(() => {
    const copied = JSON.parse(
      JSON.stringify(
        (Object.keys(cardList) as Array<keyof typeof cardList>)
          .map((item) => cardList[item])
          .flat()
      )
    );
    copied.map((it: CardImgListProps) => (it.matched = false));

    return copied.sort(() => Math.random() - 0.5);
  }, [cardList, shuffle]);

  const handleChoice = (card: CardImgListProps) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    setScore(0);
  }, [copiedCardList]);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.name === choiceTwo.name) {
        // 카드 쌍을 맞췄을 때 코드 구현 해야함
        setScore((prev) => prev + 1);

        setModalOn(flippedCard.length === copiedCardList.length);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, flippedCard]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    setDisabled(false);
  };

  return (
    <>
      <Header score={score} totalScore={copiedCardList.length / 2} />
      <CardContainer>
        {copiedCardList.map((data: CardImgListProps, idx: number) => {
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 20rem 7rem 0rem;
`;

export default CommonPage;
