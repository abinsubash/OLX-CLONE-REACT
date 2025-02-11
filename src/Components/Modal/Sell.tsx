import React from "react";

const Sell = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-brightness-25">
      <div className="bg-white p-6 rounded-s shadow-xl w-96 relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
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

        <div className="w-full border-2 border-black rounded-md p-4 text-center h-40 cursor-pointer hover:bg-gray-50">
          <input
            type="file"
            accept="image/*"
            className="w-full h-full opacity-0 cursor-pointer absolute inset-0"
          />
          <p className="text-gray-500">Click to upload images</p>
          <p className="text-sm text-gray-400">SVG, PNG, JPG</p>
        </div>

        <button className="w-full bg-green-950 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
          Sell Item
        </button>
      </div>
    </div>
  );
};

export default Sell;
