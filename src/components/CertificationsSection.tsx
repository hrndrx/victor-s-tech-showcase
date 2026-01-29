import { useEffect } from "react";
import { Award, BadgeCheck, Medal, Download } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "24 Jan 2026",
    pdfUrl: "/certificates/introduction-to-cybersecurity.pdf",
  },
  {
    id: 2,
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "25 Jan 2026",
    pdfUrl: "/certificates/getting-started-cisco-packet-tracer.pdf",
  },
];

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
            <div className="flex flex-col items-center">
              <div
                data-iframe-width="200"
                data-iframe-height="350"
                data-share-badge-id="136c8266-9689-4e9a-baa8-8462bb229303"
                data-share-badge-host="https://www.credly.com"
              ></div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Introduction to Cybersecurity</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-mono">Certificates</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">Completed: {cert.date}</p>
                  </div>
                  <a
                    href={cert.pdfUrl}
                    download
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    title="Download Certificate"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
