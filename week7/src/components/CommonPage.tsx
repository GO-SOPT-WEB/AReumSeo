import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import SingleCard from "./SingleCard";
import Header from "./Header";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

export interface cardImgListProps {
  name?: string;
  alt?: string;
  matched: boolean;
}

export interface CommonPageProps {
  cardList: cardImgListProps[];
  shuffle: number;
}

const CommonPage = (props: CommonPageProps) => {
  const { cardList, shuffle } = props;

  const [choiceOne, setChoiceOne] = useState<cardImgListProps | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<cardImgListProps | null>(null);
  const [score, setScore] = useState<number>(0);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const flippedCard = document.getElementsByClassName("flipped");

  const copiedCardList = useMemo(() => {
    setScore(0);
    const copied = JSON.parse(
      JSON.stringify(
        (Object.keys(cardList) as Array<keyof typeof cardList>)
          .map((item) => cardList[item])
          .flat()
      )
    );
    copied.map((it: cardImgListProps) => (it.matched = false));

    return copied.sort(() => Math.random() - 0.5);
  }, [cardList, shuffle]);


  const handleChoice = (card: cardImgListProps) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.name === choiceTwo.name) {
        choiceOne.matched = true;
        choiceTwo.matched = true;
        setScore((prev) => prev + 1);
        resetTurn();

        setModalOn(flippedCard.length === copiedCardList.length);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, flippedCard, copiedCardList]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    setDisabled(false);
  };

  return (
    <>
      <Header score={score} totalScore={copiedCardList.length / 2} />
      <CardContainer>
        {copiedCardList.map((data: cardImgListProps, idx: number) => {
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
