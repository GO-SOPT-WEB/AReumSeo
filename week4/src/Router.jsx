import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import DetailCardPage from "./pages/DetailCardPage";
import DetailDayInfo from "./components/DetailDayInfo";
import DetailWeekInfo from "./components/DetailWeekInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/day" element={<DetailCardPage />}>
          <Route path=":cityId" element={<DetailDayInfo />} />
        </Route>
        <Route path="/week" element={<DetailCardPage />}>
          <Route path=":cityId" element={<DetailWeekInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
