import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import DetailDayInfo from "./DetailDayInfo";
import DetailWeekInfo from "./DetailWeekInfo";
import styled from "styled-components";

const ErrorPage = ({ cityId }) => {
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("day") ? <DetailDayInfo /> : <DetailWeekInfo />;
  }, [cityId]);

  return <ErrorMessage>Not Found</ErrorMessage>;
};

export default ErrorPage;

const ErrorMessage = styled.p`
  font-size: 0.5rem;
`;
