import linkedinVideo from "@/assets/linkedin-post.mp4";

const LinkedInPost = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Notre Vision
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez notre approche unique dans l'acquisition de business digitaux
        </p>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <video 
            controls 
            className="w-full"
            preload="metadata"
          >
            <source src={linkedinVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPost;
