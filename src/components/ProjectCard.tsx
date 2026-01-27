import { ExternalLink, Github, FileText } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  type: "demo" | "report" | "finding";
  link?: string;
  github?: string;
}

const ProjectCard = ({ title, description, tags, type, link, github }: ProjectCardProps) => {
  const typeColors = {
    demo: "bg-primary/20 text-primary",
    report: "bg-blue-500/20 text-blue-400",
    finding: "bg-amber-500/20 text-amber-400",
  };

  const typeLabels = {
    demo: "Demonstration",
    report: "Report",
    finding: "Finding",
  };

  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
      {/* Type badge */}
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${typeColors[type]} mb-4`}>
        {typeLabels[type]}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Project
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        )}
        {!link && !github && (
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4" />
            Documentation
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
