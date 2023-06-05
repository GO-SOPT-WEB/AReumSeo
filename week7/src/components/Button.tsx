import { useEffect } from "react";
import styled from "styled-components";
import {
  easyCardList,
  normalCardList,
  hardCardList,
} from "../constants/cardImgList";
import CommonPage from "./CommonPage";
import { levelState, shuffleState, cardListState } from "../atom/buttonAtom";
import { useRecoilState } from "recoil";

const Button = () => {
  const levelData = ["EASY", "NORMAL", "HARD"];
  const [level, setLevel] = useRecoilState(levelState);
  const [shuffle, setShuffle] = useRecoilState(shuffleState);
  const [cardList, setCardList] = useRecoilState(cardListState);

  useEffect(() => {
    switch (level) {
      case 0:
        setCardList(easyCardList);
        break;

      case 1:
        setCardList(normalCardList);
        break;

      case 2:
        setCardList(hardCardList);
        break;

      default:
        break;
    }
  }, [level, shuffle]);

  return (
    <>
      <ResetButton
        type="button"
        onClick={() => {
          setShuffle((prev) => prev + 1);
        }}
      >
        RESET
      </ResetButton>

      <LevelBtnContainer>
        {levelData.map((data, idx) => {
          return (
            <LevelButton
              key={idx}
              type="button"
              isClicked={idx === level}
              onClick={() => {
                setLevel(idx);
              }}
            >
              {data}
            </LevelButton>
          );
        })}
      </LevelBtnContainer>

      <CommonPage cardList={cardList} shuffle={shuffle} />
    </>
  );
};

const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 2rem;
  right: 0;
  width: 7rem;
  margin: 1rem;
  padding: 1.5rem 1rem;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.lightGreen};
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGreen};
  }

  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: 1.5rem;
`;

const LevelBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13rem;
  left: 0;
  right: 0;
`;

const LevelButton = styled.button<{ isClicked: boolean }>`
  margin: 0 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.purple};
  border: 0;
  border-radius: 1rem;

  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.purple : theme.colors.lightPink};

  color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.lightPink : theme.colors.purple};

  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: 1.3rem;
`;

export default Button;
