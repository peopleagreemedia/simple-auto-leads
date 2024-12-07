import React from 'react';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const handleConfirmAvailability = () => {
    console.log("Confirm Availability clicked");
    // Add your conversion tracking here
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 animate-fade-in">
      {/* Header */}
      <header className="py-4 px-4 flex justify-center items-center border-b">
        <img 
          src="/lovable-uploads/8ed435ac-be2b-4fdc-9627-035b197f7e53.png" 
          alt="Ford Green Logo" 
          className="h-12 object-contain"
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-ford-blue">
            You can enjoy researching cars with top-rated experts, get useful information right on your phone, and happily make your new Ford your best ride, faster.
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            (Without All the Trouble of Regular Dealerships)
          </p>
        </section>

        {/* Video Section */}
        <section className="mb-8">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Video Placeholder</p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="text-center mb-12">
          <p className="text-lg md:text-xl leading-relaxed">
            Our experts' online research experience helps you gather everything you need to stop wasting time on boring, tedious vehicle research and start having fun while you shop for a car!
          </p>
        </section>

        {/* CTA Button */}
        <section className="flex justify-center">
          <Button 
            onClick={handleConfirmAvailability}
            className="bg-ford-green hover:bg-ford-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105"
          >
            Confirm Availability
          </Button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;