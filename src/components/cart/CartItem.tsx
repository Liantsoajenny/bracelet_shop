import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const itemTotal = product.price * quantity;

  return (
    <div className="flex py-6 border-b border-gray-200 animate-fade-in">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={`/product/${product.id}`} className="hover:text-primary-600 transition">
                {product.name}
              </Link>
            </h3>
            <div className="text-right">
              <p className="text-sm text-gray-500">Ar{product.price.toFixed(2)} / unité</p>
              <p className="text-primary-600">Ar{itemTotal.toFixed(2)}</p>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.category}</p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecreaseQuantity}
              className="p-1 rounded-full hover:bg-gray-100 transition"
            >
              <Minus size={16} />
            </button>
            <span className="text-gray-700 w-6 text-center">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="p-1 rounded-full hover:bg-gray-100 transition"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="font-medium text-primary-600 hover:text-primary-500 flex items-center"
          >
            <Trash2 size={16} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;