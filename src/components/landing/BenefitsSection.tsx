import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { CheckCircle } from "lucide-react";

interface BenefitsSectionProps {
  selectedModel: string;
}

export const BenefitsSection = ({ selectedModel }: BenefitsSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ford-blue mb-4">
          Shopping Experience Benefits
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience a better way to find and purchase your next Ford vehicle
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
        {t.benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 text-lg group hover:transform hover:translate-x-2 transition-transform p-4 rounded-lg hover:bg-gray-50"
          >
            <CheckCircle className="text-ford-green h-8 w-8 flex-shrink-0 group-hover:scale-110 transition-transform mt-1" />
            <span className="font-medium text-gray-700 leading-relaxed">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};