import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

interface ContactFormProps {
  selectedModel: string;
}

export const ContactForm = ({ selectedModel }: ContactFormProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedModel: selectedModel || ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted with data:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thanks for your interest!",
      description: `We'll text you shortly to schedule your consultation${formData.selectedModel ? ` about the Ford ${formData.selectedModel}` : ''}.`,
    });
    
    setIsLoading(false);
    setFormData({ name: "", email: "", phone: "", selectedModel: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="mb-16" id="contact-form">
      <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-ford-blue mb-2">{t.form.title}</h2>
          <p className="text-gray-600">{t.form.subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            name="name"
            placeholder={t.form.namePlaceholder}
            value={formData.name}
            onChange={handleInputChange}
            required
            className="text-lg py-6 bg-gray-50 border-gray-200 focus:border-ford-green focus:ring-ford-green"
          />
          <Input
            type="email"
            name="email"
            placeholder={t.form.emailPlaceholder}
            value={formData.email}
            onChange={handleInputChange}
            required
            className="text-lg py-6 bg-gray-50 border-gray-200 focus:border-ford-green focus:ring-ford-green"
          />
          <Input
            type="tel"
            name="phone"
            placeholder={t.form.phonePlaceholder}
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="text-lg py-6 bg-gray-50 border-gray-200 focus:border-ford-green focus:ring-ford-green"
          />
          <Input
            type="hidden"
            name="selectedModel"
            value={formData.selectedModel}
            onChange={handleInputChange}
          />
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-ford-green hover:bg-ford-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl disabled:opacity-70"
          >
            {isLoading ? t.form.loadingButton : t.form.submitButton}
          </Button>
          <p className="text-sm text-gray-500 text-center">
            {t.form.privacyNote}
          </p>
        </form>
      </div>
    </section>
  );
};