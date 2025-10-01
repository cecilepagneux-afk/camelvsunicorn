import linkedinVideo from "@/assets/linkedin-post.mp4";

const LinkedInPost = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Our Vision
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Discover our unique approach to digital business acquisition
        </p>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border">
          <video 
            controls 
            className="w-full"
            preload="metadata"
          >
            <source src={linkedinVideo} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPost;
