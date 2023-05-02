// styled API를 사용하여 스타일링
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = ({ counter, length }) => {
  return (
    <>
      <ChokiPokiHeader>
        <strong> 💗 쵸키랑 푸키를 맞춰주세요! 💗</strong>
        <AnswerCounter>
          <strong>
            {counter} / {length}
          </strong>
        </AnswerCounter>
      </ChokiPokiHeader>
    </>
  );
};

Header.propTypes = {
  counter: PropTypes.number,
  length: PropTypes.number,
};

export default Header;

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

const AnswerCounter = styled.p`
  margin: 1.5rem 0rem;
  text-align: center;

  color: ${({ theme }) => theme.colors.lightPink};
`;
