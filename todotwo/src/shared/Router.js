import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
