import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Cookies from 'js-cookie';

interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  description: string;
  category: string;
  createdAt: string;
  userId: string;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = () => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const products = JSON.parse(storedProducts);
        const foundProduct = products.find((p: Product) => p.id === Number(id));
        setProduct(foundProduct || null);
      }
    };

    fetchProduct();
  }, [id]);

  const formatUserEmail = (userId: string) => {
    // Get the email from cookies based on userId
    const userEmail = Cookies.get('userEmail');
    if (userEmail) {
      // Remove @gmail.com from the email
      return userEmail.replace('@gmail.com', '');
    }
    return userId; // Fallback to userId if email not found
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-4">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6 border-l">
              <div className="mb-8">
                <div className="text-3xl font-bold">₹ {product.price}</div>
                <div className="text-gray-500 mt-1">{product.title}</div>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <span>{product.category}</span>
                  <span className="mx-2">•</span>
                  <span>Posted on {new Date(product.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Seller Information</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
                    {formatUserEmail(product.userId).charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">{formatUserEmail(product.userId)}</div>
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