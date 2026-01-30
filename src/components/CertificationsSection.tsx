import { useEffect, useState } from "react";
import { Award, BadgeCheck, Medal, Download, ExternalLink } from "lucide-react";

import introToCybersecurityImg from "@/assets/certificates/introduction-to-cybersecurity.png";
import packetTracerImg from "@/assets/certificates/getting-started-cisco-packet-tracer.png";

const certificates = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "24 Jan 2026",
    pdfUrl: "/certificates/introduction-to-cybersecurity.pdf",
    image: introToCybersecurityImg,
    description: "Foundational understanding of cybersecurity concepts, threats, and protection strategies.",
  },
  {
    id: 2,
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "25 Jan 2026",
    pdfUrl: "/certificates/getting-started-cisco-packet-tracer.pdf",
    image: packetTracerImg,
    description: "Hands-on experience with network simulation and configuration using Packet Tracer.",
  },
];

const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState<"badges" | "certificates">("badges");

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
        <div className="text-center mb-8">
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

        {/* Sub Navigation Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("badges")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all ${
                activeTab === "badges"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Medal className="h-4 w-4" />
              Badges
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all ${
                activeTab === "certificates"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BadgeCheck className="h-4 w-4" />
              Certificates
            </button>
          </div>
        </div>

        {/* Badges Tab Content */}
        {activeTab === "badges" && (
          <div className="flex flex-wrap justify-center gap-8">
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
        )}

        {/* Certificates Tab Content */}
        {activeTab === "certificates" && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 card-glow"
              >
                {/* Certificate Image */}
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="p-5 border-t border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Completed: {cert.date}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        title="View Certificate"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View
                      </a>
                      <a
                        href={cert.pdfUrl}
                        download
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        title="Download Certificate"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
