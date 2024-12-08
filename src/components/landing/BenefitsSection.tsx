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
    <section className="mb-16 grid md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg">
      {t.benefits.map((benefit, index) => (
        <div key={index} className="flex items-center gap-4 text-lg group hover:transform hover:translate-x-2 transition-transform">
          <CheckCircle className="text-ford-green h-8 w-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-medium text-gray-700">
            {selectedModel 
              ? benefit.replace(/vehicle|Vehicle/, `${selectedModel}`)
              : benefit}
          </span>
        </div>
      ))}
    </section>
  );
};