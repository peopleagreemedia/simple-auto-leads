import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle, Star } from "lucide-react";

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
    <div className="min-h-screen bg-white text-gray-900 animate-fade-in">
      {/* Header */}
      <header className="py-4 px-4 flex justify-center items-center border-b">
        <img 
          src="https://i.imgur.com/A4PqozG.png" 
          alt="Ford Green Logo" 
          className="h-16 object-contain"
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-ford-blue">
            Find Your Perfect Ford in Minutes, Not Hours
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            Skip the dealership hassle. Research and find your ideal Ford with expert guidance, right from your phone.
          </p>
        </section>

        {/* Video Section */}
        <section className="mb-12">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center mt-4 text-gray-600 italic">
            "You can enjoy researching cars with top-rated experts, get useful information right on your phone, and happily make your new Ford your best ride, faster. Our experts' online research experience helps you gather everything you need to stop wasting time on boring, tedious vehicle research and start having fun while you shop for a car!"
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          {[
            "Get personalized vehicle recommendations",
            "Compare prices and features instantly",
            "Access expert research and reviews",
            "Save time with our streamlined process"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-lg">
              <CheckCircle className="text-ford-green h-6 w-6 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </section>

        {/* Form Section */}
        <section className="mb-12 max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="text-lg py-6"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="text-lg py-6"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="text-lg py-6"
            />
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-ford-green hover:bg-ford-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
            >
              {isLoading ? "Checking Availability..." : "Check Availability Now"}
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Free consultation. No spam. Privacy protected.
            </p>
          </form>
        </section>

        {/* Social Proof */}
        <section className="text-center space-y-6">
          <div className="flex justify-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg italic text-gray-700">
            "The easiest car shopping experience I've ever had. Found my perfect Ford in just 20 minutes!"
          </blockquote>
          <p className="font-semibold">- Sarah M., Happy Ford Owner</p>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;