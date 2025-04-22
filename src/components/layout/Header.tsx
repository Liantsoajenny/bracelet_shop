import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const { getCartItemsCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <h1 className={`font-heading font-bold text-2xl ${isScrolled ? 'text-black' : 'text-white'}`}>
            Malagasy learning.co
          </h1>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Accueil
          </Link>
          <Link 
            to="/products" 
            className={`font-medium transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Boutique
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            À propos
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center">
          <Link 
            to="/cart" 
            className={`relative p-2 rounded-full ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <ShoppingBag size={22} />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`ml-4 p-2 rounded-full md:hidden ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/products" 
                className="font-medium text-gray-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-700 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
