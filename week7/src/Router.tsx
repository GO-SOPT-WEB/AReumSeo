import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPage from "./page/CardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
