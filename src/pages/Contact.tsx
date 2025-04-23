import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler la soumission du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Réinitialiser le message de succès après quelques secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24">
      {/* Titre de la page */}
      <section className="relative h-72 bg-gradient-to-r from-pink-500 to-pink-300 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg md:text-xl text-gray-100">
              Nous serions ravis d'avoir de vos nouvelles. Contactez notre équipe pour toute question,
              commentaire ou demande.
            </p>
          </div>
        </div>
      </section>
      
      {/* Informations de contact et formulaire */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Prenez contact</h2>
              <p className="text-gray-700 mb-8">
                Vous avez une question concernant nos produits, la livraison ou les commandes spéciales ? 
                Notre équipe est là pour vous aider. N'hésitez pas à nous contacter par l'un des moyens ci-dessous.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Mail className="text-pink-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600">info@malagasytreasures.com</p>
                    <p className="text-gray-600">support@malagasytreasures.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Phone className="text-pink-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Téléphone</h3>
                    <p className="text-gray-600">+261 34 34 222 34</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <MapPin className="text-pink-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Adresse</h3>
                    <p className="text-gray-600">Fianarantsoa, 301</p>
                    <p className="text-gray-600">Madagascar</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-heading text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Message envoyé avec succès !</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Merci de nous avoir contacté. Nous reviendrons vers vous dès que possible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre nom*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    >
                      <option value="">Sélectionner un sujet</option>
                      <option value="order">Demande de commande</option>
                      <option value="product">Question produit</option>
                      <option value="shipping">Livraison et expédition</option>
                      <option value="return">Retours et remboursements</option>
                      <option value="wholesale">Demande de gros</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Votre message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
