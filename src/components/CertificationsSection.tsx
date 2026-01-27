import { Award, BadgeCheck } from "lucide-react";
import CertificationCard from "./CertificationCard";

const certifications: {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeImage?: string;
}[] = [];

const trainings: {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}[] = [];

const CertificationsSection = () => {
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

        {/* Certifications */}
        {certifications.length > 0 && (
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
        )}

        {/* Training */}
        {trainings.length > 0 && (
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
        )}

        {/* Empty state */}
        {certifications.length === 0 && trainings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Certifications and training will be added here.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
