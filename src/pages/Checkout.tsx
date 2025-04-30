import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const Checkout: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    phone: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis');
    console.log('Données du formulaire:', formData);
    console.log('Articles du panier:', cartItems);

    const templateParams = {
      ...formData,
      cart: cartItems.map(item => `
        Produit: ${item.product.name}
        ID: ${item.product.id}
        Quantité: ${item.quantity}
        Prix unitaire: Ar${item.product.price.toFixed(2)}
        Sous-total: Ar${(item.product.price * item.quantity).toFixed(2)}
        -------------------------
      `).join('\n'),
      total: `Ar${getCartTotal().toFixed(2)}`,
      customerInfo: `
        Nom: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Téléphone: ${formData.phone}
        Adresse: ${formData.address}
        Ville: ${formData.city}
        Pays: ${formData.country}
      `
    };

    console.log('Paramètres du template:', templateParams);

    emailjs
      .send(
        'service_a23e0ok',        // Service ID
        'template_q1qwpwf',       // Template ID
        templateParams,
        '62CGM-1BlLeulsG4s'      // Public Key
      )
      .then((response) => {
        console.log('Email envoyé avec succès:', response);
        clearCart();
        setMessageSent(true);
      })
      .catch((error) => {
        console.error('Erreur EmailJS:', error);
        alert('Une erreur est survenue lors de l\'envoi de la commande. Veuillez réessayer.');
      });
  };

  if (messageSent) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-2">Commande envoyée avec succès !</h2>
        <p>Nous vous recontacterons très bientôt.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Finaliser la commande</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input 
          name="firstName" 
          onChange={handleChange} 
          required 
          placeholder="Nom" 
          className="input" 
          value={formData.firstName}
        />
        <input 
          name="lastName" 
          onChange={handleChange} 
          required 
          placeholder="Prénom" 
          className="input" 
          value={formData.lastName}
        />
        <input 
          name="email" 
          onChange={handleChange} 
          required 
          placeholder="Email" 
          type="email" 
          className="input" 
          value={formData.email}
        />
        <input 
          name="phone" 
          onChange={handleChange} 
          required 
          placeholder="Téléphone" 
          className="input" 
          value={formData.phone}
        />
        <input 
          name="address" 
          onChange={handleChange} 
          required 
          placeholder="Adresse" 
          className="input md:col-span-2" 
          value={formData.address}
        />
        <input 
          name="city" 
          onChange={handleChange} 
          required 
          placeholder="Ville" 
          className="input" 
          value={formData.city}
        />
        <input 
          name="country" 
          onChange={handleChange} 
          required 
          placeholder="Pays" 
          className="input" 
          value={formData.country}
        />
      </div>

      <Button 
        variant="primary" 
        fullWidth 
        type="submit"
        className="mt-4"
      >
        Envoyer la commande
      </Button>
    </form>
  );
};

export default Checkout;
