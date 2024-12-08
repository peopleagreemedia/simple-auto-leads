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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white text-gray-900">
      <Header />

      <main className="relative overflow-hidden">
        {/* Hero Section with optimized mobile spacing */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <HeroSection onModelSelect={handleModelSelect} />
        </div>

        {/* Phone Preview with enhanced mobile layout */}
        <div className="bg-gradient-to-b from-gray-50/80 to-white py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-ford-blue/[0.02] transform -skew-y-3" />
          <div className="container mx-auto px-4 relative">
            <PhonePreview selectedModel={selectedModel} />
          </div>
        </div>

        {/* Benefits with mobile-optimized spacing */}
        <div className="relative py-20 md:py-28">
          <div className="absolute inset-0 bg-ford-blue/[0.03] skew-y-2 transform -z-10" />
          <div className="container mx-auto px-4">
            <BenefitsSection selectedModel={selectedModel} />
          </div>
        </div>

        {/* Features with improved mobile layout */}
        <div className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <FeaturesSection selectedModel={selectedModel} />
          </div>
        </div>

        {/* Setup Steps with mobile-friendly spacing */}
        <div className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/70">
          <div className="container mx-auto px-4">
            <SetupSteps selectedModel={selectedModel} />
          </div>
        </div>

        {/* Contact Form with mobile optimization */}
        <div className="py-16 md:py-24 bg-ford-blue/[0.03] relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <ContactForm selectedModel={selectedModel} />
          </div>
        </div>

        {/* Testimonial Section with mobile spacing */}
        <div className="py-20 md:py-28 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <TestimonialSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;