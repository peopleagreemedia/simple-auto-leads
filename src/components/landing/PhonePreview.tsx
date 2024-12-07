export const PhonePreview = () => (
  <section className="mb-16 relative">
    <div className="max-w-sm mx-auto">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <img 
            src="https://i.imgur.com/1485827404703-89b55fcc595e.jpg" 
            className="w-full h-full object-cover"
            alt="Ford research app preview"
          />
        </div>
      </div>
      
      <div className="absolute -z-10 w-[200px] h-[200px] bg-ford-blue/10 rounded-full blur-3xl top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/2"></div>
      <div className="absolute -z-10 w-[200px] h-[200px] bg-ford-green/10 rounded-full blur-3xl top-1/2 -translate-y-1/2 right-1/4 translate-x-1/2"></div>
    </div>
  </section>
);