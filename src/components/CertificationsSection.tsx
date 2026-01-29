import { useEffect } from "react";
import { Award, BadgeCheck, Medal } from "lucide-react";

const certificates: {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}[] = [];

const CertificationsSection = () => {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] py-12">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <span className="font-mono text-primary">./certifications</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and hands-on training platforms
          </p>
        </div>

        {/* Badges Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Medal className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-mono">Badges</h3>
          </div>
          <div className="flex flex-wrap gap-6">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="136c8266-9689-4e9a-baa8-8462bb229303"
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-mono">Certificates</h3>
          </div>
          {certificates.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {/* Certificates will be mapped here */}
            </div>
          ) : (
            <div className="text-center py-8 border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">Certificates will be added here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
