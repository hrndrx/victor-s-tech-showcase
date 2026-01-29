import { Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-up">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              ~/welcome<span className="text-primary terminal-cursor"></span>
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
            <span className="text-gradient">Jjemba Victor Wasswa</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono animate-fade-up delay-200">
            IT Student | Aspiring Cyber Security Specialist
          </p>

          {/* Bio */}
          <div className="max-w-3xl mx-auto animate-fade-up delay-300">
            <p className="text-foreground/80 leading-relaxed text-lg">
              My interest in technology naturally led me to computer networks and network security, 
              and ultimately to <span className="text-primary font-semibold">cybersecurity</span>, 
              where my passion is strongest. I aspire to become a cybersecurity analyst or engineer. 
              Rather than waiting to complete my degree, I have chosen to actively immerse myself 
              in the field—building hands-on experience, pursuing certifications, and developing 
              practical skills. I am highly motivated to begin contributing in junior or entry-level 
              roles as I continue my studies, grow my expertise, and develop professionally within 
              real-world cybersecurity environments.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
