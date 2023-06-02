// styled API를 사용하여 스타일링
import styled from "styled-components";
import { useEffect, useState } from "react";
import "./SingleCard.css";

export interface HeaderProps {
  score: number;
  totalScore: number;
}

const Header = (props: HeaderProps) => {
  const { score, totalScore } = props;
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (score !== 0) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }
  }, [score]);
  return (
    <>
      <ChokiPokiHeader>
        <strong> 💗 쵸키랑 푸키를 맞춰주세요! 💗</strong>
        <AnswerCounter className={animate ? "scale" : ""}>
          <strong>
            {score} / {totalScore}
          </strong>
        </AnswerCounter>
      </ChokiPokiHeader>
    </>
  );
};

// tagged template literal 을 사용
// Components 이름을 대문자로 선언
const ChokiPokiHeader = styled.header`
  display: grid;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding-top: 1.5rem;

  background-color: ${({ theme }) => theme.colors.green};

  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 2.2rem;
`;

const AnswerCounter = styled.h1`
  margin: 1.5rem 0rem;
  text-align: center;

  color: ${({ theme }) => theme.colors.lightPink};

  font-size: 2rem;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc,
    0 10px 10px rgba(0, 0, 0, 0.4);

  &.scale {
    transform: scale(1.5, 1.5);
    color: ${({ theme }) => theme.colors.lightYellow};
    text-shadow: 0 1px 0 #fec086, 0 2px 0 #fec086, 0 3px 0 #fec086,
      0 10px 10px rgba(0, 0, 0, 0.4);
  }
`;

export default Header;
