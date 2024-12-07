import { Globe } from "lucide-react";

export const Header = () => (
  <header className="py-6 px-4 flex justify-between items-center border-b bg-white shadow-sm">
    <img 
      src="https://i.imgur.com/A4PqozG.png" 
      alt="Ford Green Logo" 
      className="h-16 object-contain"
    />
    <div className="flex items-center gap-2">
      <Globe className="h-5 w-5 text-ford-blue" />
      <span className="text-sm font-medium">EN | ES</span>
    </div>
  </header>
);