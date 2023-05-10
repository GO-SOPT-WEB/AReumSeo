import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const DetailCardPage = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default DetailCardPage;
