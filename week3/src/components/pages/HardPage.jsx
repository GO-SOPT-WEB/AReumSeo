import styled from "styled-components";
import { cardImgList } from "../../constants/cardImgList";
import { useEffect, useState } from "react";

const HardPage = () => {
  const copiedCardList = cardImgList.concat(cardImgList);
  copiedCardList.sort(() => Math.random() - 0.5);

  const [shuffledList, setShuffledList] = useState(copiedCardList);

  useEffect(() => {
    setShuffledList(shuffledList * 0.5);
  }, []);
  return (
    <CardContainer>
      {copiedCardList.map((data, idx) => {
        return (
          <CardBg key={idx}>
            <img key={data.id * idx} src={data.name} />
          </CardBg>
        );
      })}
    </CardContainer>
  );
};

export default HardPage;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 20rem;
`;

const CardBg = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 17rem;
  margin: 1rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.lightPink};
  box-shadow: 1rem 1rem 1rem ${({ theme }) => theme.colors.pink};
`;
