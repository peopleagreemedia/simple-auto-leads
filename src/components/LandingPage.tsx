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
    console.log("Selected model in LandingPage:", model); // Debug log
    setSelectedModel(model);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 animate-fade-in">
      <Header />

      <main className="container mx-auto px-4 space-y-24 py-16 max-w-6xl">
        <HeroSection onModelSelect={handleModelSelect} />
        <PhonePreview selectedModel={selectedModel} />
        <BenefitsSection selectedModel={selectedModel} />
        <FeaturesSection selectedModel={selectedModel} />
        <SetupSteps selectedModel={selectedModel} />
        <ContactForm selectedModel={selectedModel} />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default LandingPage;