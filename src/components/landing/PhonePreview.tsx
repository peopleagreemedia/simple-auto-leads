import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState } from "react";
import { ModelSelector } from "./preview/ModelSelector";
import { ModelConfirmation } from "./preview/ModelConfirmation";
import { InitialPreview } from "./preview/InitialPreview";

interface PhonePreviewProps {
  selectedModel: string;
}

export const PhonePreview = ({ selectedModel }: PhonePreviewProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showModels, setShowModels] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [localSelectedModel, setLocalSelectedModel] = useState(selectedModel);

  const handleModelClick = (model: string) => {
    console.log("Model clicked in PhonePreview:", model);
    setLocalSelectedModel(model);
    setShowModels(false);
    setIsConfirming(true);
  };

  const handleConfirm = () => {
    setIsConfirming(false);
    const formElement = document.querySelector('#contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChooseDifferent = () => {
    setIsConfirming(false);
    setShowModels(true);
  };

  return (
    <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-ford-blue mb-6 text-center">
        {selectedModel ? `Preview of Your ${selectedModel}` : "Find Your Perfect Ford"}
      </h2>
      <div className="flex flex-col items-center text-center">
        {!selectedModel && !isConfirming ? (
          <InitialPreview onClick={() => setShowModels(true)} />
        ) : isConfirming ? (
          <ModelConfirmation 
            model={localSelectedModel}
            onConfirm={handleConfirm}
            onChooseDifferent={handleChooseDifferent}
          />
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

      {showModels && (
        <ModelSelector 
          onModelSelect={handleModelClick}
          onClose={() => setShowModels(false)}
        />
      )}
    </section>
  );
};