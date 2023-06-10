import cover from "../assets/cover.png";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./SingleCard.css";

const SingleCard = ({ handleChoice, data, flipped, disabled }) => {
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

// js는 동적으로 데이터 타입이 동적으로 지정되기 때문에, 엉뚱한 데이터가 들어오지 않도록 prop type 지정해줌
SingleCard.propTypes = {
  handleChoice: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SingleCard;

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
