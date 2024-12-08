import { useState } from "react";

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

interface ModelSelectorProps {
  onModelSelect: (model: string) => void;
  onClose: () => void;
}

export const ModelSelector = ({ onModelSelect, onClose }: ModelSelectorProps) => {
  const handleModelClick = (model: string) => {
    console.log("Model selected in ModelSelector:", model);
    onModelSelect(model);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in" 
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-ford-blue mb-6">Select Your Ford Model</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORD_MODELS.map((model) => (
            <button
              key={model}
              onClick={() => handleModelClick(model)}
              className="text-left p-6 hover:bg-gray-50 rounded-lg transition-all duration-200 border-2 border-gray-100 hover:border-ford-blue group"
            >
              <span className="text-lg font-medium text-gray-700 group-hover:text-ford-blue block">
                Ford {model}
              </span>
              <span className="text-sm text-gray-500 group-hover:text-ford-blue/80 mt-1 block">
                View Details →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};