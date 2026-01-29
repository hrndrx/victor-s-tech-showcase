import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${typeColors[project.type]} mb-4`}>
            {typeLabels[project.type]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded">
                {tag}
              </span>
            ))}
          </div>

          {/* External links */}
          {(project.link || project.github) && (
            <div className="flex items-center gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>

        {/* Documentation */}
        {project.documentation && (
          <div className="space-y-8">
            {/* Screenshots at the top with download */}
            {project.documentation.images.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold font-mono text-primary">Screenshots & Diagrams</h2>
                <div className="grid gap-6">
                  {project.documentation.images.map((image, index) => (
                    <div key={index} className="space-y-3">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full rounded-lg border border-border"
                      />
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground italic">
                          {image.caption}
                        </p>
                        <a
                          href={image.src}
                          download
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                          </svg>
                          Download
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full documentation as continuous text */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-bold font-mono text-primary mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed mb-8">
                {project.documentation.introduction}
              </p>

              {project.documentation.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-bold font-mono text-primary mb-4">
                    {index + 2}. {section.title}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="ml-4 mb-4">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {index + 2}.{subIndex + 1} {subsection.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              ))}

              <h2 className="text-xl font-bold font-mono text-primary mb-4">Conclusion</h2>
              <p className="text-foreground/80 leading-relaxed">
                {project.documentation.conclusion}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
