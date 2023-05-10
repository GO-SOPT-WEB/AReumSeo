import styled from "styled-components";

const ImgCard = (props) => {
  const { data } = props;

  return (
    <ImgWrapper>
      <ImgWrapperHeader>
        <strong>{data.dt_txt ? data.dt_txt.slice(5, 10) : data.name}</strong>
      </ImgWrapperHeader>
    </ImgWrapper>
  );
};

export default ImgCard;

const ImgWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.lightGreen};
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${({ theme }) => theme.colors.darkGreen};
`;

const ImgWrapperHeader = styled.header`
  margin: 1.35rem 0rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGreen};
`;
