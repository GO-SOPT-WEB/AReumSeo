import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  easyCardList,
  normalCardList,
  hardCardList,
} from "../constants/cardImgList";
import CommonPage from "./CommonPage";

const Button = () => {
  const levelData = ["EASY", "NORMAL", "HARD"];
  // 기본 난이도 'EASY'로 설정
  const [isClick, setIsClick] = useState(0);
  const [cardList, setCardList] = useState(easyCardList);
  const [shuffle, setShuffle] = useState(0);

  useEffect(() => {
    switch (isClick) {
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
  }, [isClick, shuffle]);

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
              isClick={idx === isClick}
              onClick={() => {
                setIsClick(idx);
              }}
            >
              {data}
            </LevelButton>
          );
        })}
      </LevelBtnContainer>

      {<CommonPage cardList={cardList} />}
    </>
  );
};

export default Button;

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

  font-family: ${({ theme }) => theme.font.buttonFont};
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

const LevelButton = styled.button`
  margin: 0 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.purple};
  border: 0;
  border-radius: 1rem;

  background-color: ${({ theme, isClick }) =>
    isClick ? theme.colors.purple : theme.colors.lightPink};

  color: ${({ theme, isClick }) =>
    isClick ? theme.colors.lightPink : theme.colors.purple};

  font-family: ${({ theme }) => theme.font.buttonFont};
  font-size: 1.3rem;
`;
