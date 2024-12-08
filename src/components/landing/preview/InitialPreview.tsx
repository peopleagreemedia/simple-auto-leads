interface InitialPreviewProps {
  onClick: () => void;
}

export const InitialPreview = ({ onClick }: InitialPreviewProps) => {
  return (
    <div 
      className="cursor-pointer group w-full"
      onClick={onClick}
    >
      <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden mb-4">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        >
          <source src="/ford-preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-8">
          <p className="text-white text-xl font-medium group-hover:scale-105 transition-transform duration-300">
            Click to explore our Ford models
          </p>
        </div>
      </div>
      <p className="text-gray-600 mt-4 max-w-lg mx-auto group-hover:text-ford-blue transition-colors">
        Discover the features that matter most to you in our interactive preview
      </p>
    </div>
  );
};