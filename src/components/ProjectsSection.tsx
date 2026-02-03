import { FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
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
    <section className="min-h-[calc(100vh-4rem)] py-12">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FolderOpen className="h-6 w-6 text-primary" />
            <span className="font-mono text-primary">./projects</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A collection of my cybersecurity projects, findings, demonstrations, and technical reports
          </p>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 card-glow block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-mono font-medium ${typeColors[project.type]}`}>
                      {typeLabels[project.type]}
                    </span>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-mono rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-muted-foreground text-xs">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
