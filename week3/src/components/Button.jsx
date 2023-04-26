import { useState } from "react";
import styled from "styled-components";

const Button = () => {
  const levelData = ["EASY", "NORMAL", "HARD"];

  const [isClick, setIsClick] = useState("");

  return (
    <>
      <ResetButton type="button">RESET</ResetButton>

      <LevelBtnContainer>
        {levelData.map((data, idx) => {
          return (
            <LevelButton
              key={idx}
              type="button"
              isClick={idx === isClick}
              onClick={() => setIsClick(idx)}
            >
              {data}
            </LevelButton>
          );
        })}
      </LevelBtnContainer>
    </>
  );
};

export default Button;

const ResetButton = styled.button`
  display: flex;
  justify-content: center;

  position: fixed;
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

const LevelButton = styled.button`
  margin: 0 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.purple};

  background-color: ${({ theme, isClick }) =>
    isClick ? theme.colors.purple : theme.colors.lightPink};

  color: ${({ theme, isClick }) =>
    isClick ? theme.colors.lightPink : theme.colors.purple};

  font-family: ${(props) => props.theme.font.fontFamily};
  font-size: 1rem;
`;
