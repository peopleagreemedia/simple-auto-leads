import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="text-center space-y-6 bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-8 w-8 fill-current" />
        ))}
      </div>
      <blockquote className="text-xl italic text-gray-700">
        {t.testimonial.quote}
      </blockquote>
      <p className="font-semibold text-gray-900">{t.testimonial.author}</p>
    </section>
  );
};