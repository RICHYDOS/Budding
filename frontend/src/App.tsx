import ProductsPage from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
