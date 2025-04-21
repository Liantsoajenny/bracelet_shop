import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import Button from '../components/ui/Button';

const Cart: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-6 text-gray-600 max-w-md mx-auto">
            Looks like you haven't added any products to your cart yet.
            Explore our collections to find something you'll love!
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="text-primary-600 hover:text-primary-700 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Continue shopping
          </Link>
        </div>
        
        <h1 className="font-heading text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.product.id} className="py-6">
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="flex items-center text-gray-600"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (5%)</span>
                  <span>${(getCartTotal() * 0.05).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${(getCartTotal() + 5 + (getCartTotal() * 0.05)).toFixed(2)}</span>
              </div>
              
              <Link to="/checkout">
                <Button variant="primary" fullWidth className="py-3">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;