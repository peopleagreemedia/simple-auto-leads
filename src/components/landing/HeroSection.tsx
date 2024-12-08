import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState, useEffect, useRef } from "react";

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

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const intervalRef = useRef<number>();

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = window.setInterval(() => {
        if (!isPaused) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentModelIndex((prevIndex) => 
              prevIndex === FORD_MODELS.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
          }, 300);
        }
      }, 3000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleModelClick = (model: string) => {
    // Find the form element and scroll to it
    const formElement = document.querySelector('#contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Pre-fill a hidden input or update state in the contact form
    const modelInput = document.querySelector<HTMLInputElement>('input[name="selectedModel"]');
    if (modelInput) {
      modelInput.value = model;
    }
    
    setShowModels(false);
  };

  const titleStart = t.hero.title.split("Ford")[0];
  const titleEnd = t.hero.title.split("Ford")[1];

  return (
    <section className="text-center mb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-ford-blue leading-tight">
          <span 
            className={`block transition-all duration-300 ease-in-out cursor-pointer 
              group relative inline-flex items-center justify-center
              ${isTransitioning 
                ? 'opacity-0 scale-90 -translate-y-2 transform' 
                : 'opacity-100 scale-100 translate-y-0 transform'
              }
              hover:text-ford-blue/90 hover:scale-[1.02]
            `}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setShowModels(!showModels)}
          >
            {titleStart}Ford {FORD_MODELS[currentModelIndex]}{titleEnd}
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              ↓
            </span>
          </span>
          <span className="block text-xl md:text-2xl mt-4 text-gray-600 font-normal">
            {t.hero.subtitle}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        
        {showModels && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModels(false)}>
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
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
      </div>
    </section>
  );
};