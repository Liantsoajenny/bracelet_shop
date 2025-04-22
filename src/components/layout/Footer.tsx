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
              Faire rayonner la beauté des arts malgaches dans le monde entier, 
              directement depuis Madagascar.
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
            <h3 className="font-heading font-semibold text-lg mb-4">Boutique</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=bracelet" className="text-rose-100">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/products?category=art" className="text-rose-100">
                  Art malgache
                </Link>
              </li>
              <li>
                <Link to="/products?featured=true" className="text-rose-100">
                  Articles en vedette
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-rose-100">
                  Tous les produits
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Aide</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-rose-100">
                  Livraison & Retours
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-rose-100">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-rose-100">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic">
              <p>Madagascar, 301</p>
              <p className="mt-2">Email : malagasylearning@gmail.com</p>
              <p>Téléphone : +261 34 66 758 40</p>
            </address>
          </div>
        </div>

        <div className="border-t border-rose-800 mt-8 pt-8 text-sm text-rose-300 text-center">
          <p>&copy; {new Date().getFullYear()} Malagasy Learning. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
