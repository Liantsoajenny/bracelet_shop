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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24">
      {/* Page Title */}
      <section className="relative h-72 bg-gradient-to-r from-pink-500 to-pink-300 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="relative z-10 max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-100">
              We'd love to hear from you. Get in touch with our team for any questions, 
              feedback, or inquiries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Have a question about our products, shipping, or special orders? 
                Our team is here to help. Feel free to reach out using any of the methods below.
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
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-gray-600">+261 34 34 222 34</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <MapPin className="text-pink-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-gray-600">Fianarantsoa, 301</p>
                    <p className="text-gray-600">Madagascar</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
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
                      Your Email*
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
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="shipping">Shipping & Delivery</option>
                      <option value="return">Returns & Refunds</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message*
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
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
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
