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
    <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-ford-blue mb-8 text-center">
        {selectedModel ? `Get Started with Your ${selectedModel}` : t.setup.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {t.setup.steps.map((step, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-ford-blue/10 rounded-full flex items-center justify-center text-ford-blue">
              {icons[index]}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600">{getPersonalizedDescription(step.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};