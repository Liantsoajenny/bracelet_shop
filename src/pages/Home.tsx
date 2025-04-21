import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';


import braceletImg from '../assets/bracelet.jpg';
import artImg from '../assets/art.jpg';


const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-pink-500 to-pink-300 text-white">
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-30" 
    style={{ backgroundImage: `url(${braceletImg})` }}
  />
         <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className={`max-w-2xl transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Asa tanana<br />Vita Malagasy
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl drop-shadow">
            Mivarotra sy maneho ireo asa tanana vita Malagasy
          </p>
          {/* Boutons ici */}
        </div>
      </div>
    </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bracelet */}
          <div className="relative rounded-lg overflow-hidden group h-80 shadow-md">
            <img 
              src={braceletImg} 
              alt="Brazilian Bracelets" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex flex-col justify-end p-6 text-white">
              <h3 className="font-heading text-2xl font-bold mb-2 drop-shadow-md">Brazilian Bracelets</h3>
              <p className="mb-4 text-gray-200 drop-shadow">Handcrafted with love and tradition</p>
              <Link to="/products?category=bracelet">
                <Button variant="outline" size="md" className="text-white border-white hover:bg-white/10 flex items-center">
                  View Collection
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Art */}
          <div className="relative rounded-lg overflow-hidden group h-80 shadow-md">
            <img 
              src={artImg} 
              alt="Malagasy Arts" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 flex flex-col justify-end p-6 text-white">
              <h3 className="font-heading text-2xl font-bold mb-2 drop-shadow-md">Malagasy Arts</h3>
              <p className="mb-4 text-gray-200 drop-shadow">Cultural treasures from Madagascar</p>
              <Link to="/products?category=art">
                <Button variant="outline" size="md" className="text-white border-white hover:bg-white/10 flex items-center">
                  View Collection
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
      
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-heading text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
