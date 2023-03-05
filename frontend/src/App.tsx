import ProductsPage from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
