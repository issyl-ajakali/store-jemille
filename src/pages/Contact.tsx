import React from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Contact Us</h1>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you! Reach out to us using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Phone</h3>
                  <p className="text-amber-700">+63 12 345 6789</p>
                  <p className="text-amber-700">+63 98 765 4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p className="text-amber-700">info@miilebites.com</p>
                  <p className="text-amber-700">orders@miilebites.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Hours</h3>
                  <p className="text-amber-700">Monday - Sunday: 8AM - 10PM</p>
                  <p className="text-amber-700">Orders accepted until 9:30PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-amber-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900">Address</h3>
                  <p className="text-amber-700">123 Filipino Street, Manila</p>
                  <p className="text-amber-700">Philippines</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-amber-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Order Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 h-96 w-full bg-amber-100 rounded-md overflow-hidden">
            {/* Placeholder for an actual map */}
            <div className="h-full w-full flex items-center justify-center bg-amber-200">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-amber-900 mx-auto mb-4" />
                <p className="text-amber-900 font-medium">123 Filipino Street, Manila, Philippines</p>
                <p className="text-amber-700 text-sm mt-2">Map loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;