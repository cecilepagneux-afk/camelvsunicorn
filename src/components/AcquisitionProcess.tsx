import buyingBusinessVideo from "@/assets/buying-business.mp4";

const AcquisitionProcess = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-6">
          How to Acquire a Digital Business?
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Discover our step-by-step acquisition process, powered by NotebookLM
        </p>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <video 
            autoPlay
            loop
            muted
            playsInline
            controls 
            className="w-full"
            preload="metadata"
          >
            <source src={buyingBusinessVideo} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AcquisitionProcess;
