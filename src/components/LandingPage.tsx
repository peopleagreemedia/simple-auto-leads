import { Header } from './landing/Header';
import { HeroSection } from './landing/HeroSection';
import { PhonePreview } from './landing/PhonePreview';
import { BenefitsSection } from './landing/BenefitsSection';
import { FeaturesSection } from './landing/FeaturesSection';
import { SetupSteps } from './landing/SetupSteps';
import { ContactForm } from './landing/ContactForm';
import { TestimonialSection } from './landing/TestimonialSection';
import { useState } from 'react';

const LandingPage = () => {
  const [selectedModel, setSelectedModel] = useState<string>("");

  const handleModelSelect = (model: string) => {
    console.log("Selected model in LandingPage:", model);
    setSelectedModel(model);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <Header />

      <main className="relative">
        {/* Hero Section with increased vertical spacing */}
        <div className="container mx-auto px-4 py-24">
          <HeroSection onModelSelect={handleModelSelect} />
        </div>

        {/* Phone Preview with background accent */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-32">
          <div className="container mx-auto px-4">
            <PhonePreview selectedModel={selectedModel} />
          </div>
        </div>

        {/* Benefits with subtle separator */}
        <div className="relative py-32">
          <div className="absolute inset-0 bg-ford-blue/5 skew-y-3 transform -z-10" />
          <div className="container mx-auto px-4">
            <BenefitsSection selectedModel={selectedModel} />
          </div>
        </div>

        {/* Features with increased spacing */}
        <div className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <FeaturesSection selectedModel={selectedModel} />
          </div>
        </div>

        {/* Setup Steps with background accent */}
        <div className="relative py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <SetupSteps selectedModel={selectedModel} />
          </div>
        </div>

        {/* Contact Form with visual separation */}
        <div className="py-32 bg-ford-blue/5">
          <div className="container mx-auto px-4">
            <ContactForm selectedModel={selectedModel} />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <TestimonialSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;