import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-pink-800 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Malagasy Learning.co</h1>
            <p className="text-lg md:text-xl text-gray-100">
              Partagez l'artisanat malgache
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-700 mb-4">
                Malagasy Treasures est né d'une passion simple : partager l'incroyable artisanat de Madagascar avec le monde.
              </p>
              <p className="text-gray-700 mb-4">
                Ce qui a commencé comme une petite collection d'objets artisanaux s'est transformé en une sélection soigneusement choisie de magnifiques œuvres d'art malgaches. Chaque pièce de notre collection raconte une histoire, incarnant des siècles de tradition et de savoir-faire.
              </p>
              <p className="text-gray-700">
                Nous travaillons directement avec les artisans de Madagascar, assurant une rémunération équitable et des pratiques durables. En achetant chez Malagasy Treasures, vous n'acquérez pas seulement une belle œuvre d'art - vous soutenez des communautés et contribuez à préserver les traditions culturelles.
              </p>
            </div>
          
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Notre Mission</h2>
            <p className="text-gray-700 mb-8">
              Nous nous engageons à célébrer et préserver les belles traditions artistiques de Madagascar tout en créant des opportunités économiques durables pour les artisans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Préservation Culturelle</h3>
                <p className="text-gray-600">
                  Soutenir et promouvoir l'artisanat traditionnel et les techniques artistiques transmises de génération en génération.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Commerce Équitable</h3>
                <p className="text-gray-600">
                  Assurer une rémunération équitable aux artisans pour leur travail et créer des opportunités économiques durables.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Responsabilité Environnementale</h3>
                <p className="text-gray-600">
                  Promouvoir l'utilisation de matériaux durables et de pratiques de production respectueuses de l'environnement.
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
