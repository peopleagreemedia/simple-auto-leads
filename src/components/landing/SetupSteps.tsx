import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { PhoneCall, MessageSquare, Laptop } from "lucide-react";

interface SetupStepsProps {
  selectedModel: string;
}

export const SetupSteps = ({ selectedModel }: SetupStepsProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    <PhoneCall className="w-8 h-8" />,
    <MessageSquare className="w-8 h-8" />,
    <Laptop className="w-8 h-8" />
  ];

  const getPersonalizedDescription = (text: string) => {
    return selectedModel ? text.replace(/your Ford|your vehicle/gi, `your ${selectedModel}`) : text;
  };

  return (
    <section className="relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ford-blue mb-4 hover:scale-105 transition-transform">
          {selectedModel ? `Get Started with Your ${selectedModel}` : t.setup.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to begin your journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {t.setup.steps.map((step, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 bg-ford-blue text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="mx-auto w-16 h-16 bg-ford-blue/10 rounded-full flex items-center justify-center text-ford-blue group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-ford-blue group-hover:text-ford-blue/80 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {getPersonalizedDescription(step.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};