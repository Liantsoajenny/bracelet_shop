import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Malagasy Learning.co</h1>
            <p className="text-lg md:text-xl text-gray-100">
              Mizara ny asa tanana vita Malagasy 
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Malagasy Treasures began with a simple passion: to share the incredible artistry of Madagascar with the world. 
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small collection of handcrafted items has grown into a curated selection of beautiful and Malagasy arts. Every piece in our collection tells a story, embodying centuries of tradition and craftsmanship.
              </p>
              <p className="text-gray-700">
                We work directly with artisans in Madagascar , ensuring fair compensation and sustainable practices. By purchasing from Malagasy Treasures, you're not just acquiring a beautiful piece of art—you're supporting communities and helping preserve cultural traditions.
              </p>
            </div>
          
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-8">
              We're committed to celebrating and preserving the beautiful artistic traditions of Madagascar while creating sustainable economic opportunities for artisans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Cultural Preservation</h3>
                <p className="text-gray-600">
                  Supporting and promoting traditional craftsmanship and artistic techniques that have been passed down through generations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Fair Trade</h3>
                <p className="text-gray-600">
                  Ensuring artisans receive fair compensation for their work and creating sustainable economic opportunities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Environmental Responsibility</h3>
                <p className="text-gray-600">
                  Promoting the use of sustainable materials and environmentally conscious production practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;