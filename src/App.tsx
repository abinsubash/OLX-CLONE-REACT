import { AuthProvider } from "./Components/Context/UserexistContext";
import { ProductProvider } from './Components/Context/ProductContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import ProductDetialpge from "./Components/Product/ProductDetialpge";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetialpge />} />
          </Routes>
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
