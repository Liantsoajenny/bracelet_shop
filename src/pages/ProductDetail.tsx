import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const product = products.find(p => p.id === Number(id));
  
  useEffect(() => {
    // Reset scroll position when viewing a product
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button variant="primary">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
    
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to products
          </Link>
        </div>
        
        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-96 md:h-full overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.featured && (
                <div className="absolute top-4 left-4 bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded">
                  Featured
                </div>
              )}
            </div>
            
            {/* Product Details */}
            <div className="p-6 md:p-8 flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-gray-500 capitalize">{product.category}</span>
              </div>
              
              <h1 className="font-heading text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="mb-6">
                <span className="text-2xl font-semibold text-primary-600">${product.price.toFixed(2)}</span>
              </div>
              
              <p className="text-gray-700 mb-8">
                {product.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={handleIncreaseQuantity}
                    className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Button 
                  variant="primary" 
                  fullWidth
                  onClick={handleAddToCart}
                  className="flex items-center justify-center"
                  disabled={isAddedToCart}
                >
                  {isAddedToCart ? (
                    "Added to Cart!"
                  ) : (
                    <>
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  fullWidth
                  className="flex items-center justify-center"
                >
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-gray-500">
                  <span>Share:</span>
                  <div className="flex space-x-3">
                    <button className="hover:text-primary-600 transition">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button className="hover:text-primary-600 transition">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="hover:text-primary-600 transition">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Specifications, if we want to add more details */}
        <div className="mt-12">
          <h2 className="font-heading text-2xl font-bold mb-6">Product Details</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Description</h3>
                <p className="text-gray-700">
                  {product.description} Our products are carefully handcrafted by skilled artisans, ensuring each item is unique and of the highest quality. We source all materials ethically and sustainably.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Product Information</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="w-32 font-medium text-gray-500">Category:</span>
                    <span className="text-gray-700 capitalize">{product.category}</span>
                  </li>
                  <li className="flex">
                    <span className="w-32 font-medium text-gray-500">Material:</span>
                    <span className="text-gray-700">
                      {product.category === 'bracelet' ? 'Cotton threads, beads' : 'Wood, canvas, natural materials'}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="w-32 font-medium text-gray-500">Origin:</span>
                    <span className="text-gray-700">
                      {product.category === 'bracelet' ? 'Brazil' : 'Madagascar'}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="w-32 font-medium text-gray-500">Handmade:</span>
                    <span className="text-gray-700">Yes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold mb-6">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;