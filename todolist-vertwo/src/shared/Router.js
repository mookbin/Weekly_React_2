import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="details/:id" element={<Detail />} />
        {/* 파라미터 사용  */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
