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

    const templateParams = {
      ...formData,
      cart: cartItems.map(item => `${item.product.name} x${item.quantity}`).join(', '),
      total: `Ar${getCartTotal().toFixed(2)}`
    };

    emailjs
      .send(
        'service_h0gali8',        // Service ID
        'template_evnyz5i',       // Template ID
        templateParams,
        '62CGM-1BlLeulsG4s'      // Public Key
      )
      .then(() => {
        clearCart();
        setMessageSent(true);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
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
        <input name="firstName" onChange={handleChange} required placeholder="Nom" className="input" />
        <input name="lastName" onChange={handleChange} required placeholder="Prénom" className="input" />
        <input name="email" onChange={handleChange} required placeholder="Email" type="email" className="input" />
        <input name="phone" onChange={handleChange} required placeholder="Téléphone" className="input" />
        <input name="address" onChange={handleChange} required placeholder="Adresse" className="input md:col-span-2" />
        <input name="city" onChange={handleChange} required placeholder="Ville" className="input" />
        <input name="country" onChange={handleChange} required placeholder="Pays" className="input" />
      </div>

      <Button variant="primary" fullWidth type="submit">
        Envoyer la commande
      </Button>
    </form>
  );
};

export default Checkout;
