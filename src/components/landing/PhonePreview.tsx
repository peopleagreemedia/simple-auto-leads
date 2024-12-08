import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState } from "react";

const FORD_MODELS = [
  "Bronco",
  "Bronco Sport",
  "E-Series Cutaway",
  "Edge",
  "Escape",
  "Expedition",
  "Expedition Max",
  "Explorer",
  "F-Series Trucks",
  "Maverick",
  "Mustang",
  "Mustang Mach-E",
  "Ranger",
  "Super Duty Trucks",
  "Transit Cargo Van",
  "Transit Commercial",
  "Transit Passenger Wagon"
];

interface PhonePreviewProps {
  selectedModel: string;
}

export const PhonePreview = ({ selectedModel }: PhonePreviewProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [showModels, setShowModels] = useState(false);

  const handleModelClick = (model: string) => {
    // Find the form element and scroll to it
    const formElement = document.querySelector('#contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-ford-blue mb-6 text-center">
        {selectedModel ? `Preview of Your ${selectedModel}` : "Find Your Perfect Ford"}
      </h2>
      <div className="flex flex-col items-center text-center">
        {!selectedModel ? (
          <div 
            className="cursor-pointer group w-full"
            onClick={() => setShowModels(true)}
          >
            <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden mb-4">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              >
                <source src="/ford-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
                <p className="text-white text-xl font-medium group-hover:scale-105 transition-transform duration-300">
                  Click to explore our Ford models
                </p>
              </div>
            </div>
            <p className="text-gray-600 mt-4 max-w-lg mx-auto group-hover:text-ford-blue transition-colors">
              Discover the features that matter most to you in our interactive preview
            </p>
          </div>
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
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" 
          onClick={() => setShowModels(false)}
        >
          <div 
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in" 
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-ford-blue mb-4">Select a Model to Get Started</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FORD_MODELS.map((model) => (
                <button
                  key={model}
                  onClick={() => handleModelClick(model)}
                  className="text-left p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 border border-gray-100 hover:border-ford-blue group"
                >
                  <span className="text-lg font-medium text-gray-700 group-hover:text-ford-blue">
                    Ford {model}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};