import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const WeatherPage = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default WeatherPage;
