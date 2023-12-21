import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import NavBar from "../components/NavBar";
import { ItemDetailContainer } from "../Pages/ItemDetailContainer";
import { SubCategory } from "../Pages/SubCategory";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<SubCategory />} />
      </Routes>
    </BrowserRouter>
  );
};
