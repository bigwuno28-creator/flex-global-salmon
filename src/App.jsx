import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Products from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:slug"element={<ProductDetail />} />
    </Routes>
  );
}

export default App;