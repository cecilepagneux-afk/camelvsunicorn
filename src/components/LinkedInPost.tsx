import linkedinVideo from "@/assets/linkedin-post.mp4";

const LinkedInPost = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-gray-50/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-600 mb-4 italic animate-fade-in">
          Every business has a story. Ours begins where yours continues.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-cvds-primary mb-16 animate-fade-in-up">
          Our Vision
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Discover our unique approach to digital business acquisition
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
            <source src={linkedinVideo} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPost;
