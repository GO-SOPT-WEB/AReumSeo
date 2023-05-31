import PropTypes from "prop-types";
import styled from "styled-components";

const Modal = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <strong>🤩🎉🌈축하합니다!!🌈🎉🤩</strong>
        <GoBackBtn onClick={onClose}>게임으로 돌아가기</GoBackBtn>
      </ModalContent>
    </ModalContainer>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  display: grid;
  padding: 2.5rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightPink_modal};
  font-size: 1.7rem;
`;

const GoBackBtn = styled.button`
  padding: 1rem 0rem;
  margin-top: 1.5rem;
  border: 0;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.darkPink_modal};
  color: ${({ theme }) => theme.colors.white};

  @font-face {
    font-family: "UhBeeSe_hyun";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "UhBeeSe_hyun";
  font-size: 1rem;
`;
