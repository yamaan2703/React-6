import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Products from "../../Pages/Products";
import Contact from "../../Pages/Contact";
import Navbar from "../../Components/Navbar";
import ProductsDetails from "../../Pages/ProductDetail.";

export default function AppRouter () {
    return (
      <div>
          <BrowserRouter>
           <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="/productsdetails/:id" element={<ProductsDetails />}></Route>
            <Route path="conatact" element={<Contact />}></Route>
          </Routes>
          </BrowserRouter>

      </div>
    )
}