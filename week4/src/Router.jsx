import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
