import { Loader2, ChevronRight } from "lucide-react";

interface ModelModalProps {
  onModelSelect: (model: string) => void;
  onClose: () => void;
  isLoading?: boolean;
}

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

export const ModelModal = ({ onModelSelect, onClose, isLoading }: ModelModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in" 
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-ford-blue mb-4">Select a Model to Get Started</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORD_MODELS.map((model) => (
            <button
              key={model}
              onClick={() => onModelSelect(model)}
              disabled={isLoading}
              className="group text-left p-4 hover:bg-gray-50 rounded-lg transition-all duration-200 border-2 border-gray-100 hover:border-ford-blue relative overflow-hidden disabled:opacity-80"
            >
              <span className="relative z-10 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700 group-hover:text-ford-blue">
                  Ford {model}
                </span>
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-ford-blue" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-ford-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ford-blue/5 to-transparent group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};