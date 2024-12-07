import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, Star, Phone, Shield } from "lucide-react";
import { Header } from './landing/Header';
import { HeroSection } from './landing/HeroSection';
import { PhonePreview } from './landing/PhonePreview';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted with data:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thanks for your interest!",
      description: "We'll be in touch shortly with vehicle availability.",
    });
    
    setIsLoading(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 animate-fade-in">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <HeroSection />
        <PhonePreview />

        {/* Benefits Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg">
          {[
            "Get personalized vehicle recommendations",
            "Compare prices and features instantly",
            "Access expert research and reviews",
            "Save time with our streamlined process",
            "Pick up right where you left off with a free account",
            "Estimate your credit score instantly",
            "Available in English and Spanish",
            "Includes Free Lifetime Powertrain Warranty"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 text-lg group hover:transform hover:translate-x-2 transition-transform">
              <CheckCircle className="text-ford-green h-8 w-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-700">{benefit}</span>
            </div>
          ))}
        </section>

        {/* Interactive Features Section */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-ford-blue mb-6">Interactive Tools at Your Fingertips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-ford-blue/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-ford-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Chat Support</h3>
                  <p className="text-gray-600">Chat with our experts in English or Spanish</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-ford-green/10 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-ford-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Credit Score Tool</h3>
                  <p className="text-gray-600">Estimate your credit score and explore financing options</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-ford-blue/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-ford-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Warranty Protection</h3>
                  <p className="text-gray-600">Learn about our Free Lifetime Powertrain Warranty coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="mb-16">
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="text-lg py-6 bg-gray-50 border-gray-200 focus:border-ford-green focus:ring-ford-green"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="text-lg py-6 bg-gray-50 border-gray-200 focus:border-ford-green focus:ring-ford-green"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="text-lg py-6 bg-gray-50 border-gray-200 focus:border-ford-green focus:ring-ford-green"
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-ford-green hover:bg-ford-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-70"
              >
                {isLoading ? "Checking Availability..." : "Check Availability Now"}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Free consultation. No spam. Privacy protected.
              </p>
            </form>
          </div>
        </section>

        {/* Social Proof */}
        <section className="text-center space-y-6 bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl italic text-gray-700">
            "The easiest car shopping experience I've ever had. Found my perfect Ford in just 20 minutes!"
          </blockquote>
          <p className="font-semibold text-gray-900">- Sarah M., Happy Ford Owner</p>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
