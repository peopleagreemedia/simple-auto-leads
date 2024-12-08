import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

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
    onModelSelect(model);
    setShowModels(false);
    // Scroll to phone preview section for confirmation
    const previewSection = document.querySelector('#phone-preview');
    if (previewSection) {
      previewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleStart = t.hero.title.split("Ford")[0];
  const titleEnd = t.hero.title.split("Ford")[1];

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
            {titleStart}Ford {FORD_MODELS[currentModelIndex]}{titleEnd}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        
        <button
          onClick={() => setShowModels(!showModels)}
          className="group relative inline-flex items-center justify-center gap-2 bg-ford-blue text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Models
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-ford-blue/0 via-white/10 to-ford-blue/0 group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </button>
        
        {showModels && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={() => setShowModels(false)}>
            <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
              <h3 className="text-2xl font-bold text-ford-blue mb-4">Select a Model to Get Started</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FORD_MODELS.map((model) => (
                  <button
                    key={model}
                    onClick={() => handleModelClick(model)}
                    className="group text-left p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 border-2 border-gray-100 hover:border-ford-blue relative overflow-hidden"
                  >
                    <span className="relative z-10 flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-700 group-hover:text-ford-blue">
                        Ford {model}
                      </span>
                      <ChevronRight className="w-5 h-5 text-ford-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ford-blue/5 to-transparent group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
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