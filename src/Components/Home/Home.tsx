import React from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Modal/Login";
import Sell from "../Modal/Sell";
import { useModal } from "../Context/ModalContext";
import { useNavigate } from 'react-router-dom';
import { useProducts } from "../Context/ProductContext";

const Home: React.FC = () => {
  const { loginModal, sellModal } = useModal();
  const { products } = useProducts();
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <Navbar />
      <div className="h-auto w-full">
        <h1 className="text-2xl ml-10 mt-10 text-green-950 font-medium">
          Fresh recommendations
        </h1>

        {products.length === 0 && (
          <p className="ml-10 mt-5 text-gray-500">No products available</p>
        )}

        <div className="ml-10 mt-3 h-auto w-300 flex flex-wrap gap-5">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="border border-black rounded-lg h-70 w-70 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="h-40 w-65 m-2 border border-black">
                <img 
                  className="w-full h-full object-cover" 
                  src={product.imageUrl} 
                  alt={product.title} 
                />
              </div>
              <div className="m-2 h-20 w-65 border border-black">
                <p className="ml-1 font-bold text-2xl">₹{product.price}</p>
                <p className="ml-3">{product.title}</p>
                <p className="ml-3 text-sm text-gray-500">
                  {formatDate(product.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {loginModal && <Login/>}
      {sellModal && <Sell />}
    </>
  );
};

export default Home;
