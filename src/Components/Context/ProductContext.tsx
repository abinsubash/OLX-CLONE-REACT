import React, { createContext, useContext, useState } from 'react';
import { useModal } from "../Context/ModalContext";
import Cookies from "js-cookie";

interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
  description: string;
  createdAt: string;
  userId: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const addProduct = (product: Product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

const Sell = () => {
  const { setSellModal } = useModal();
  const { addProduct } = useProducts();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!previewUrl) {
      alert("Please select an image first!");
      return;
    }
    
    if (!formData.title || !formData.category || !formData.price || !formData.description) {
      alert("Please fill in all fields!");
      return;
    }
    
    if (isNaN(Number(formData.price))) {
      alert("Price must be a number!");
      return;
    }

    const userId = Cookies.get('userId');
    if (!userId) {
      alert("Please login first!");
      return;
    }

    setLoading(true);

    try {
      const productData = {
        ...formData,
        imageUrl: previewUrl,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        userId: userId
      };

      addProduct(productData);
      alert("Item listed successfully!");
      setSellModal(false);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to list your item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-brightness-25">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl h-8 w-8 flex items-center justify-center cursor-pointer"
          onClick={() => setSellModal(false)}
          disabled={loading}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">Sell Item</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border-2 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border-2 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />
        <input
          type="text"
          name="price"
          placeholder="Price (numbers only)"
          value={formData.price}
          onChange={handleChange}
          className="w-full border-2 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border-2 rounded-md p-2 mb-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={loading}
        ></textarea>
        <div className="w-full border-2 border-dashed border-gray-300 rounded-md p-4 text-center h-40 cursor-pointer hover:bg-gray-50 relative flex items-center justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-10"
            disabled={loading}
          />
          <div className="w-full h-full flex items-center justify-center">
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain" />
            ) : (
              <p className="text-gray-500">Click to upload images</p>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-950 text-white py-2 rounded-md mt-4 hover:bg-green-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Processing..." : "Sell Item"}
        </button>
      </div>
    </div>
  );
};

export default Sell;
