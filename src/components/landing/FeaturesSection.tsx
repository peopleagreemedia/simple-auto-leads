import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { PhoneCall, MessageSquare, Laptop } from "lucide-react";

interface FeaturesSectionProps {
  selectedModel: string;
}

export const FeaturesSection = ({ selectedModel }: FeaturesSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  const getPersonalizedDescription = (text: string) => {
    return selectedModel ? text.replace(/your Ford|your vehicle/gi, `your ${selectedModel}`) : text;
  };

  return (
    <section className="relative" id="features-section">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ford-blue mb-3 md:mb-4">
          {selectedModel ? `Interactive Tools for Your ${selectedModel}` : "Interactive Tools at Your Fingertips"}
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Everything you need to manage your vehicle experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
            <div className="bg-ford-blue/10 p-4 rounded-full group-hover:scale-110 transition-transform">
              <PhoneCall className="h-6 w-6 md:h-8 md:w-8 text-ford-blue" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-ford-blue">
              {t.features.chatSupport.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {getPersonalizedDescription(t.features.chatSupport.description)}
            </p>
          </div>
        </div>

        <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
            <div className="bg-ford-green/10 p-4 rounded-full group-hover:scale-110 transition-transform">
              <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-ford-green" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-ford-blue">
              {t.features.creditScore.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {getPersonalizedDescription(t.features.creditScore.description)}
            </p>
          </div>
        </div>

        <div className="group bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
            <div className="bg-ford-blue/10 p-4 rounded-full group-hover:scale-110 transition-transform">
              <Laptop className="h-6 w-6 md:h-8 md:w-8 text-ford-blue" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-ford-blue">
              {t.features.warranty.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {getPersonalizedDescription(t.features.warranty.description)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};