import { Award, ExternalLink, Calendar } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeImage?: string;
}

const CertificationCard = ({ title, issuer, date, credentialUrl, badgeImage }: CertificationCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow group">
      <div className="flex items-start gap-4">
        {/* Badge/Icon */}
        <div className="flex-shrink-0">
          {badgeImage ? (
            <img src={badgeImage} alt={title} className="w-16 h-16 rounded-lg object-contain" />
          ) : (
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{issuer}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>

        {/* Link */}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 text-muted-foreground hover:text-primary transition-colors"
            title="View Credential"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
