import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rose-900 text-rose-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-heading font-bold text-xl mb-4">Malagasy Learning.co</h2>
            <p className="mb-4">
              Bringing the beauty of Malagasy arts  to the world, 
              direct from Madagascar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-rose-100">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-rose-100">
                <Instagram size={20} />
              </a>

              <a href="#" className="text-rose-100">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=bracelet" className="text-rose-100">
                  Bracelet
                </Link>
              </li>
              <li>
                <Link to="/products?category=art" className="text-rose-100">
                   Art Malagasy
                </Link>
              </li>
              <li>
                <Link to="/products?featured=true" className="text-rose-100">
                  Featured Items
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-rose-100">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-rose-100">
                  Shipping & Returns
                </Link>
              </li>
             
              <li>
                <Link to="/contact" className="text-rose-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-rose-100">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p>Madagascar, 301</p>
              <p className="mt-2">Email: malagasylearning@gmail.com</p>
              <p>Phone: +261 34 66 758 40</p>
            </address>
          </div>
        </div>

        <div className="border-t border-rose-800 mt-8 pt-8 text-sm text-rose-300 text-center">
          <p>&copy; {new Date().getFullYear()} Malagasy learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
