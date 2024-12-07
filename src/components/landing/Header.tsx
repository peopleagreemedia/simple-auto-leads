import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    console.log('Toggling language from:', language);
    setLanguage(language === 'EN' ? 'ES' : 'EN');
  };

  return (
    <header className="py-6 px-4 flex justify-between items-center border-b bg-white shadow-sm">
      <img 
        src="https://i.imgur.com/A4PqozG.png" 
        alt="Ford Green Logo" 
        className="h-16 object-contain"
      />
      <Button
        variant="ghost"
        onClick={toggleLanguage}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <Globe className="h-5 w-5 text-ford-blue" />
        <span className="text-sm font-medium">
          {language === 'EN' ? 'EN | ES' : 'ES | EN'}
        </span>
      </Button>
    </header>
  );
};