import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState, useEffect } from "react";
import { ModelSelector } from "./preview/ModelSelector";
import { ModelConfirmation } from "./preview/ModelConfirmation";
import { InitialPreview } from "./preview/InitialPreview";
import { LoadingOverlay } from "../ui/loading-overlay";
import { ModelModal } from "./modals/ModelModal";

interface PhonePreviewProps {
  selectedModel: string;
}

export const PhonePreview = ({ selectedModel }: PhonePreviewProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showModels, setShowModels] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [localSelectedModel, setLocalSelectedModel] = useState(selectedModel);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedModel && !hasConfirmed) {
      setIsLoading(true);
      setLocalSelectedModel(selectedModel);
      setTimeout(() => {
        setIsConfirming(true);
        setIsLoading(false);
      }, 600);
    }
  }, [selectedModel, hasConfirmed]);

  const handleModelClick = (model: string) => {
    console.log("Model clicked in PhonePreview:", model);
    setIsLoading(true);
    setIsAnimating(true);
    setLocalSelectedModel(model);
    
    setTimeout(() => {
      setShowModels(false);
      setTimeout(() => {
        setIsConfirming(true);
        setIsAnimating(false);
        setIsLoading(false);
      }, 300);
    }, 300);
    
    setHasConfirmed(false);
  };

  const handleConfirm = () => {
    console.log("Model confirmed in PhonePreview:", localSelectedModel);
    setIsLoading(true);
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsConfirming(false);
      setHasConfirmed(true);
      
      setTimeout(() => {
        const benefitsSection = document.getElementById('benefits-section');
        if (benefitsSection) {
          setIsAnimating(false);
          setIsLoading(false);
          benefitsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 800);
    }, 300);
  };

  return (
    <section 
      id="phone-preview" 
      className={`mb-16 bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
        isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <h2 className="text-2xl font-bold text-ford-blue mb-6 text-center">
        {selectedModel ? `Preview of Your ${selectedModel}` : "Find Your Perfect Ford"}
      </h2>
      <div className="relative flex flex-col items-center text-center min-h-[300px]">
        {isLoading && <LoadingOverlay />}
        
        <div className={`w-full transition-all duration-300 ${
          isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
        }`}>
          {!localSelectedModel && !isConfirming ? (
            <InitialPreview onClick={() => setShowModels(true)} />
          ) : isConfirming ? (
            <ModelConfirmation 
              model={localSelectedModel}
              onConfirm={handleConfirm}
              onChooseDifferent={() => setShowModels(true)}
            />
          ) : (
            <>
              <img
                src={`/images/${selectedModel.toLowerCase()}.png`}
                alt={`Preview of ${selectedModel}`}
                className="w-full max-w-md mx-auto animate-fade-in"
              />
              <p className="text-gray-600 mt-4">
                Get detailed information about your {selectedModel} and connect with our experts
              </p>
            </>
          )}
        </div>
      </div>

      {showModels && (
        <ModelModal 
          onModelSelect={handleModelClick}
          onClose={() => setShowModels(false)}
          isLoading={isLoading}
        />
      )}
    </section>
  );
};