import ProductsPage from "./pages/Products";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Loader from "./pages/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Loader />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
