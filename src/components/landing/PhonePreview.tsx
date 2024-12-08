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
        {selectedModel ? `Preview of Your ${selectedModel}` : "Find Your Perfect Ford"}
      </h2>
      <div className="flex flex-col items-center text-center">
        {!selectedModel ? (
          <>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Select a Ford model"
              className="w-full max-w-md rounded-lg mb-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-gray-600 mt-4 max-w-lg">
              Click on the model name above to select your Ford vehicle and see detailed information. Our interactive preview will help you explore your chosen model's features.
            </p>
          </>
        ) : (
          <>
            <img
              src={`/images/${selectedModel.toLowerCase()}.png`}
              alt={`Preview of ${selectedModel}`}
              className="w-full max-w-md"
            />
            <p className="text-gray-600 mt-4">
              Get detailed information about your {selectedModel} and connect with our experts
            </p>
          </>
        )}
      </div>
    </section>
  );
};