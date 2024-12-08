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
          Is this the Ford {model} you're interested in?
        </h3>
        <p className="text-lg text-gray-700">
          Take a moment to confirm if this model matches your preferences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto px-8 py-4 bg-ford-blue text-white rounded-xl hover:bg-ford-blue/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg font-semibold"
          >
            Yes, Get Started →
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