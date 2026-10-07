export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (!project) return null;

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
          
          {/* Badge Role Kuning */}
          {project.role && (
            <span className="inline-block mt-1.5 text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
              {project.role}
            </span>
          )}
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack List */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
