import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentModelIndex((prevIndex) => 
          prevIndex === FORD_MODELS.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const titleStart = t.hero.title.split("Ford")[0];
  const titleEnd = t.hero.title.split("Ford")[1];

  return (
    <section className="text-center mb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-ford-blue leading-tight">
          <span className="block">
            {titleStart}Ford{" "}
            <span 
              className={`inline-block min-w-[280px] transition-opacity duration-400 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {FORD_MODELS[currentModelIndex]}
            </span>
            {titleEnd}
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