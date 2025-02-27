import React from "react";
import { useModal } from "../Context/ModalContext";
const Sell = () => {
  const {setSellModal}=useModal()
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-brightness-25">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl h-8 w-8 flex items-center justify-center cursor-pointer" onClick={()=>setSellModal(false)}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Sell Item</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full border-2 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full border-2 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Price"
          className="w-full border-2 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Description"
          className="w-full border-2 rounded-md p-2 mb-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <div className="w-full border-2 border-dashed border-gray-300 rounded-md p-4 text-center h-40 cursor-pointer hover:bg-gray-50 relative flex items-center justify-center">
          <input
            type="file"
            accept="image/*"
            className="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-10"
          />
          <div>
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-gray-500">Click to upload images</p>
            <p className="text-sm text-gray-400">SVG, PNG, JPG</p>
          </div>
        </div>

        <button className="w-full bg-green-950 text-white py-2 rounded-md mt-4 hover:bg-green-800">
          Sell Item
        </button>
      </div>
    </div>
  );
};

export default Sell;