import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

interface PhonePreviewProps {
  selectedModel: string;
}

export const PhonePreview = ({ selectedModel }: PhonePreviewProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-ford-blue mb-6">
        {selectedModel ? `Preview of Your ${selectedModel}` : "Preview of Your Vehicle"}
      </h2>
      <div className="flex justify-center">
        <img
          src={selectedModel ? `/images/${selectedModel.toLowerCase()}.png` : '/placeholder.svg'}
          alt={selectedModel ? `Preview of ${selectedModel}` : 'Vehicle Preview'}
          className="w-full max-w-md"
        />
      </div>
      <p className="text-gray-600 mt-4">
        {selectedModel 
          ? `Get detailed information about your ${selectedModel} and connect with our experts`
          : "Select a vehicle model to see detailed information"}
      </p>
    </section>
  );
};