interface ModelConfirmationProps {
  model: string;
  onConfirm: () => void;
  onChooseDifferent: () => void;
}

export const ModelConfirmation = ({ model, onConfirm, onChooseDifferent }: ModelConfirmationProps) => {
  return (
    <div className="space-y-8 max-w-2xl mx-auto p-6 bg-gray-50 rounded-xl border-2 border-ford-blue animate-fade-in">
      <img
        src={`/images/${model.toLowerCase()}.png`}
        alt={`Preview of ${model}`}
        className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-300"
      />
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-ford-blue">
          Let Us Set Up Your Personalized {model} Experience
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <h4 className="font-semibold text-ford-blue mb-2">White-Glove Setup:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Professional onboarding</li>
              <li>• Personalized walkthrough</li>
              <li>• Expert guidance</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <h4 className="font-semibold text-ford-blue mb-2">Dashboard Features:</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Vehicle configurations</li>
              <li>• Trade-in values</li>
              <li>• Financing options</li>
            </ul>
          </div>
        </div>
        <p className="text-lg text-gray-700">
          Our professional staff will personally set up your {model} dashboard with everything you need - from custom configurations to financing options. Once onboarded, you'll have full access to explore at your own pace.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto px-8 py-4 bg-ford-blue text-white rounded-xl hover:bg-ford-blue/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg font-semibold group"
          >
            Start My Personalized Setup
            <span className="block text-sm opacity-80 group-hover:opacity-100 transition-opacity">
              For the {model}
            </span>
          </button>
          <button
            onClick={onChooseDifferent}
            className="w-full sm:w-auto px-8 py-4 border-2 border-ford-blue text-ford-blue rounded-xl hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Choose Different Model
          </button>
        </div>
      </div>
    </div>
  );
};