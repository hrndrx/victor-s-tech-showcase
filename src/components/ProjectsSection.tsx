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

        {/* Projects grid - larger square cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 card-glow block aspect-square flex flex-col justify-between"
            >
              {/* Type badge */}
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${typeColors[project.type]} mb-4`}>
                  {typeLabels[project.type]}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded">
                    {tag}
                  </span>
                ))}
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
