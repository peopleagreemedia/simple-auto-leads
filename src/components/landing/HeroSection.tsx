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
          }, 300); // Increased duration for smoother transition
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

  const titleStart = t.hero.title.split("Ford")[0];
  const titleEnd = t.hero.title.split("Ford")[1];

  return (
    <section className="text-center mb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-ford-blue leading-tight">
          <span 
            className={`block transition-all duration-300 ease-in-out ${
              isTransitioning 
                ? 'opacity-0 scale-90 -translate-y-2 transform' 
                : 'opacity-100 scale-100 translate-y-0 transform'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {titleStart}Ford {FORD_MODELS[currentModelIndex]}{titleEnd}
          </span>
          <span className="block text-xl md:text-2xl mt-4 text-gray-600 font-normal">
            {t.hero.subtitle}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {t.hero.description}
        </p>
      </div>
    </section>
  );
};