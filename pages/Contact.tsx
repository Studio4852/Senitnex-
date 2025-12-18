import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting SentiNEX. We will respond soon.');
    setFormData({ name: '', email: '', organisation: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <div className="bg-primary pt-24 pb-32 text-white relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in touch</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We're here to help you find clarity. Send us a message to learn more about SentiNEX or request a session.
            </p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Info Sidebar */}
           <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 h-full">
                 <h3 className="text-xl font-bold text-primary mb-6">Contact Info</h3>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                          <Mail size={18} />
                       </div>
                       <div>
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <a href="mailto:support@sentinex.ng" className="font-medium text-primary hover:text-secondary transition-colors">support@sentinex.ng</a>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                          <MapPin size={18} />
                       </div>
                       <div>
                          <p className="text-sm text-gray-500 mb-1">Office</p>
                          <p className="font-medium text-primary">Lagos, Nigeria</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm">Working Hours</p>
                    <p className="text-primary font-medium mt-1">Mon - Fri, 9am - 5pm WAT</p>
                 </div>
              </div>
           </div>

           {/* Main Form */}
           <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary focus:bg-white outline-none transition-all placeholder-gray-400"
                            placeholder="Your full name"
                          />
                       </div>

                       <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary focus:bg-white outline-none transition-all placeholder-gray-400"
                            placeholder="you@company.com"
                          />
                       </div>
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-sm font-semibold text-gray-700 mb-2">Organisation</label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary focus:bg-white outline-none transition-all placeholder-gray-400"
                        placeholder="Company or Team name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary focus:bg-white outline-none transition-all placeholder-gray-400 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" variant="primary" className="w-full md:w-auto px-8" icon={<Send size={16} />}>
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;