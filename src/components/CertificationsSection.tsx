import { Award, BadgeCheck } from "lucide-react";
import CertificationCard from "./CertificationCard";

const certifications = [
  {
    id: 1,
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google via Coursera",
    date: "2024",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "CompTIA Security+ (In Progress)",
    issuer: "CompTIA",
    date: "Expected 2024",
  },
  {
    id: 3,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "#",
  },
];

const trainings = [
  {
    id: 1,
    title: "TryHackMe Learning Paths",
    issuer: "TryHackMe",
    date: "Ongoing",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Hack The Box Academy",
    issuer: "Hack The Box",
    date: "Ongoing",
    credentialUrl: "#",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-card/30">
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

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-mono">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                credentialUrl={cert.credentialUrl}
              />
            ))}
          </div>
        </div>

        {/* Training */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <BadgeCheck className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold font-mono">Training & Platforms</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {trainings.map((training) => (
              <CertificationCard
                key={training.id}
                title={training.title}
                issuer={training.issuer}
                date={training.date}
                credentialUrl={training.credentialUrl}
              />
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            * Badge images and credential links will be updated as certifications are completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
