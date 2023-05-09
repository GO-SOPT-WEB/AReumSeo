import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SearchWeather from "../components/SearchWeather";

const DetailCardPage = () => {
  return (
    <PageLayout>
      <SearchWeather/>
      <Outlet />
    </PageLayout>
  );
};

export default DetailCardPage;
