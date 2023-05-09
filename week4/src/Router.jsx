import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import DetailCardPage from "./pages/DetailCardPage";
import DetailDayWeather from "./components/DetailDayWeather";
import DetailWeekWeather from "./components/DetailWeekWeather";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/day" element={<DetailCardPage />}>
          <Route path=":cityId" element={<DetailDayWeather />} />
        </Route>
        <Route path="/week" element={<DetailCardPage />}>
          <Route path=":cityId" element={<DetailWeekWeather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
