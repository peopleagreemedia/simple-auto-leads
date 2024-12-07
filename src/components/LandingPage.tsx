import { Header } from './landing/Header';
import { HeroSection } from './landing/HeroSection';
import { PhonePreview } from './landing/PhonePreview';
import { BenefitsSection } from './landing/BenefitsSection';
import { FeaturesSection } from './landing/FeaturesSection';
import { SetupSteps } from './landing/SetupSteps';
import { ContactForm } from './landing/ContactForm';
import { TestimonialSection } from './landing/TestimonialSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 animate-fade-in">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <HeroSection />
        <PhonePreview />
        <BenefitsSection />
        <FeaturesSection />
        <SetupSteps />
        <ContactForm />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default LandingPage;