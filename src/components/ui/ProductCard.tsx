import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {product.featured && (
        <div className="absolute top-2 left-2 z-10 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">
          Featured
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-heading font-semibold text-lg text-gray-800 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>
            <span className="font-medium text-primary-600">
              Ar{product.price.toFixed(2)}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500 capitalize">
              {product.category}
            </span>
            
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleAddToCart}
              className="flex items-center gap-1"
            >
              <ShoppingBag size={16} />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;