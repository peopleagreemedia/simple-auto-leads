import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState, useEffect } from "react";
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
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (selectedModel && !hasConfirmed) {
      setLocalSelectedModel(selectedModel);
      // Add a small delay before showing confirmation to allow for smooth transition
      setTimeout(() => {
        setIsConfirming(true);
      }, 100);
    }
  }, [selectedModel, hasConfirmed]);

  const handleModelClick = (model: string) => {
    console.log("Model clicked in PhonePreview:", model);
    setIsAnimating(true);
    setLocalSelectedModel(model);
    
    // Sequence the animations
    setTimeout(() => {
      setShowModels(false);
      setTimeout(() => {
        setIsConfirming(true);
        setIsAnimating(false);
      }, 300);
    }, 300);
    
    setHasConfirmed(false);
  };

  const handleConfirm = () => {
    console.log("Model confirmed in PhonePreview:", localSelectedModel);
    setIsAnimating(true);
    
    // Sequence the animations for a smoother transition
    setTimeout(() => {
      setIsConfirming(false);
      setHasConfirmed(true);
      
      // Add a longer delay before scrolling to benefits section
      setTimeout(() => {
        const benefitsSection = document.getElementById('benefits-section');
        if (benefitsSection) {
          setIsAnimating(false);
          benefitsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 800); // Longer delay to allow user to see the confirmation
    }, 300);
  };

  const handleChooseDifferent = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsConfirming(false);
      setShowModels(true);
      setHasConfirmed(false);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section 
      id="phone-preview" 
      className={`mb-16 bg-white rounded-2xl p-8 shadow-lg transition-opacity duration-300 ${
        isAnimating ? 'opacity-80' : 'opacity-100'
      }`}
    >
      <h2 className="text-2xl font-bold text-ford-blue mb-6 text-center">
        {selectedModel ? `Preview of Your ${selectedModel}` : "Find Your Perfect Ford"}
      </h2>
      <div className={`flex flex-col items-center text-center transition-all duration-300 ${
        isAnimating ? 'scale-95' : 'scale-100'
      }`}>
        {!localSelectedModel && !isConfirming ? (
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
              className="w-full max-w-md animate-fade-in"
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