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
          src={`/images/${selectedModel.toLowerCase()}.png`}
          alt={`Preview of ${selectedModel}`}
          className="w-full max-w-md"
        />
      </div>
      <p className="text-gray-600 mt-4">
        {selectedModel ? t.phonePreview[selectedModel] : t.phonePreview.default}
      </p>
    </section>
  );
};
