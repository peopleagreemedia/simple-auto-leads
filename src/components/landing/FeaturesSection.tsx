import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Phone, Star, Shield } from "lucide-react";

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
    <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-ford-blue mb-6">
        {selectedModel ? `Interactive Tools for Your ${selectedModel}` : "Interactive Tools at Your Fingertips"}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-ford-blue/10 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-ford-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{t.features.chatSupport.title}</h3>
              <p className="text-gray-600">{getPersonalizedDescription(t.features.chatSupport.description)}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-ford-green/10 p-3 rounded-lg">
              <Star className="h-6 w-6 text-ford-green" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{t.features.creditScore.title}</h3>
              <p className="text-gray-600">{getPersonalizedDescription(t.features.creditScore.description)}</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-ford-blue/10 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-ford-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{t.features.warranty.title}</h3>
              <p className="text-gray-600">{getPersonalizedDescription(t.features.warranty.description)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};