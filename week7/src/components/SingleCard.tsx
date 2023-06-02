import cover from "../assets/image/cover.png";
import styled from "styled-components";
import "./SingleCard.css";
import { cardImgListProps } from "./CommonPage";

export interface SingleCardProps {
  handleChoice: Function;
  data: cardImgListProps;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard = (props: SingleCardProps) => {
  const { handleChoice, data, flipped, disabled } = props;

  const handleClick = () => {
    if (!disabled) {
      handleChoice(data);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <CardFront className="front">
          <img src={data.name} alt="카드 앞면" />
        </CardFront>
        <CardBack className="back">
          <img src={cover} alt="카드 뒷면" onClick={handleClick} />
        </CardBack>
      </div>
    </div>
  );
};

const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
  height: 15rem;
  margin: 0rem 1rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.lightPink};
  box-shadow: 1rem 1rem 1rem ${({ theme }) => theme.colors.pink};
`;

const CardBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
  height: 15rem;
  margin: 1rem;
  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: 1rem 1rem 1rem ${({ theme }) => theme.colors.pink};
`;

export default SingleCard;
