import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import MainLayout from "./component/layout/MainLayout";
import Home from "./component/pages/Home";
import ProductList from "./component/pages/ProductList";
import Contact from "./component/pages/Contact";
import Categories from "./component/pages/Categories";
import Cart from "./component/pages/Cart";

createRoot(document.getElementById("root")).render(

  <HashRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  </HashRouter>

);