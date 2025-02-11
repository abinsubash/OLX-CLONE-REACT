import React from 'react';
import Navbar from "../Navbar/Navbar";
import Car from '../../assets/car.png'
const Productpge = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto flex items-center justify-center mt-7">
        <div className="flex border-2 border-black rounded-xl p-4 w-3/4">
          <div className="w-1/2 h-80 border rounded-xl overflow-hidden">
            <img 
              src={Car}
              alt="Product" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="w-1/2 pl-6 flex flex-col justify-between">
            <div>
              <p className="text-2xl font-bold">₹ 1000000</p>
              <p className="text-gray-600 mt-1">Car</p>
              <p className="text-xl font-semibold mt-2">Kia Seltos</p>
              <p className="text-gray-500 mt-1">Good condition</p>
            </div>

            <div className="mt-4">
              <p className="font-bold">Seller: Vishnu VP</p>
              <p className="text-sm text-gray-500 mt-2">Mon Nov 25 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpge;
