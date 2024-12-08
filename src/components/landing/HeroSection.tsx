import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState, useEffect, useRef } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { ModelModal } from "./modals/ModelModal";

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

interface HeroSectionProps {
  onModelSelect: (model: string) => void;
}

export const HeroSection = ({ onModelSelect }: HeroSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    console.log("Selected model in HeroSection:", model);
    setIsLoading(true);
    onModelSelect(model);
    setShowModels(false);
    
    setTimeout(() => {
      const previewSection = document.querySelector('#phone-preview');
      if (previewSection) {
        previewSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => setIsLoading(false), 600);
      }
    }, 300);
  };

  return (
    <section className="text-center mb-16">
      <div className="max-w-3xl mx-auto space-y-8">
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
            Get Your Personal Ford {FORD_MODELS[currentModelIndex]} Dashboard
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Select your preferred Ford model to access a customized dashboard with pricing, features, and expert guidance - all in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setShowModels(!showModels)}
            disabled={isLoading}
            className="group relative inline-flex items-center justify-center gap-2 bg-ford-blue text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden disabled:opacity-80"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Choose Your Model
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-ford-blue/0 via-white/10 to-ford-blue/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </button>
          
          <button
            onClick={() => {
              const previewSection = document.querySelector('#phone-preview');
              if (previewSection) {
                previewSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-ford-blue hover:text-ford-blue/80 font-medium flex items-center gap-2 group"
          >
            View Demo Dashboard
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {showModels && (
          <ModelModal 
            onModelSelect={handleModelClick}
            onClose={() => setShowModels(false)}
            isLoading={isLoading}
          />
        )}
      </div>
    </section>
  );
};