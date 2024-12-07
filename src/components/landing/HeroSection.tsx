import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="text-center mb-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-ford-blue leading-tight">
          {t.hero.title}
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