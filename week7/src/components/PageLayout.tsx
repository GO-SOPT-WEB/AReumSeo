import styled from "styled-components";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <St.PageWrapper>{children}</St.PageWrapper>;
};

const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `,
};

export default PageLayout;
