import React from 'react';
import Navbar from "../Navbar/Navbar";

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-4">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Car" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2 mt-4">
                <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
                  <img src="/api/placeholder/100/100" alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6 border-l">
              <div className="mb-8">
                <div className="text-3xl font-bold">₹ 1,000,000</div>
                <div className="text-gray-500 mt-1">2022 Kia Seltos HTX Plus Diesel</div>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <span>Port Blair, Andaman & Nicobar Islands</span>
                  <span className="mx-2">•</span>
                  <span>Posted on Feb 19, 2025</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Seller Description</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
                    V
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Vishnu VP</div>
                    <div className="text-sm text-gray-500">Member since Nov 2024</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold">
                  Chat with Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;