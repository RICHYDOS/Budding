import ProductsPage from "./pages/Products";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Loader from "./pages/Loader";
import { AnimatePresence } from "framer-motion";
import { QueryClientProvider, QueryClient } from "react-query";
import ProductContextProvider from "./Context/ProductContext";
import UserContext from "./Context/UserContext";
import CartContextProvider from "./Context/CartContext";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <ProductContextProvider>
          <CartContextProvider>
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
          </CartContextProvider>
        </ProductContextProvider>
      </UserContext>
    </QueryClientProvider>
  );
}

export default App;
