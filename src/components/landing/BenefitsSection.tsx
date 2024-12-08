import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

interface BenefitsSectionProps {
  selectedModel: string;
}

export const BenefitsSection = ({ selectedModel }: BenefitsSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Remove the automatic scrolling from here since it will be triggered by PhonePreview's handleConfirm
    console.log("Benefits section mounted/updated with model:", selectedModel);
  }, [selectedModel]);

  return (
    <section ref={sectionRef} className="relative" id="benefits-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-ford-blue mb-4">
          {selectedModel ? `New Dashboard Experience for Your ${selectedModel}` : "New Dashboard Experience & Benefits"}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {selectedModel 
            ? `Experience a better way to find and purchase your new Ford ${selectedModel}`
            : "Experience a better way to find and purchase your next Ford vehicle"}
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

      {selectedModel && (
        <div className="mt-8 text-center">
          <a 
            href="#contact-form" 
            className="inline-flex items-center gap-2 text-ford-blue hover:text-ford-blue/80 font-medium text-lg group"
          >
            Ready to get started with your {selectedModel}?
            <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      )}
    </section>
  );
};