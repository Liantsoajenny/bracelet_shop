import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import CartItem from '../components/cart/CartItem';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

const Checkout: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      clearCart();
      
      // Redirect to home after showing success message
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };
  
  if (cartItems.length === 0 && !isComplete) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="mb-6">Add some products to your cart before proceeding to checkout.</p>
          <Link to="/products">
            <Button variant="primary">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  if (isComplete) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
          <p className="mb-6 text-gray-600">
            Thank you for your purchase. We have received your order and will process it shortly.
            A confirmation email has been sent to your email address.
          </p>
          <Link to="/">
            <Button variant="primary">
              Back to Home
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
          <Link to="/cart" className="text-primary-600 hover:text-primary-700 flex items-center">
            <ArrowLeft size={16} className="mr-1" />
            Back to cart
          </Link>
        </div>
        
        <h1 className="font-heading text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="border-t border-b border-gray-200 py-4 mb-4">
                {cartItems.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200 mt-2">
                  <span>Total</span>
                  <span>${(getCartTotal() + 5 + (getCartTotal() * 0.05)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Checkout Form */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                {/* Shipping Information */}
                <div className="mb-8">
                  <h2 className="font-heading text-xl font-semibold mb-4">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address*
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code*
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                        Country*
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="mb-8">
                  <h2 className="font-heading text-xl font-semibold mb-4">Payment Information</h2>
                  
                  <div className="flex items-center mb-4">
                    <CreditCard size={20} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">Secure payment via credit card</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Name on Card*
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number*
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date*
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                        Security Code (CVC)*
                      </label>
                      <input
                        type="text"
                        id="cardCvc"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        placeholder="CVC"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  fullWidth 
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Order'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;