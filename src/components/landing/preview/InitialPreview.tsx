interface InitialPreviewProps {
  onClick: () => void;
}

export const InitialPreview = ({ onClick }: InitialPreviewProps) => {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div 
        className="cursor-pointer group w-full bg-gray-50 rounded-xl border-2 border-ford-blue p-8 transition-all duration-300 hover:bg-gray-100"
        onClick={onClick}
      >
        <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden mb-6">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://player.vimeo.com/video/1037104322?h=0&autoplay=1&loop=1&muted=1&background=1"
              className="absolute top-0 left-0 w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
            <p className="text-white text-xl font-medium group-hover:scale-105 transition-transform duration-300">
              Interactive Dashboard Preview
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-ford-blue">
            Your Personal Ford Dashboard
          </h3>
          <p className="text-gray-600 text-lg">
            Select a model to unlock your custom dashboard with real-time pricing, features comparison, and expert guidance.
          </p>
          <button
            className="w-full sm:w-auto px-8 py-4 bg-ford-blue text-white rounded-xl hover:bg-ford-blue/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg font-semibold"
          >
            Choose Your Model →
          </button>
        </div>
      </div>
    </div>
  );
};