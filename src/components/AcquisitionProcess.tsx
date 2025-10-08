import buyingBusinessVideo from "@/assets/buying-business.mp4";

const AcquisitionProcess = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-6">
          Comment Acquérir un Business Digital ?
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Découvrez notre processus d'acquisition étape par étape, basé sur NotebookLM
        </p>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <video 
            controls 
            className="w-full"
            preload="metadata"
          >
            <source src={buyingBusinessVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AcquisitionProcess;
