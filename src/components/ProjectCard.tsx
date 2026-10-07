export interface Project {
  id: string;
  title: string;
  role?: string;
  type?: string;
  description: string;
  techStack?: string[];
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeText = project.role || project.type;
  const tagsList = project.techStack || project.tags || [];

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
          {badgeText && (
            <p className="text-xs text-amber-400 font-medium mt-0.5">{badgeText}</p>
          )}
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>

      {tagsList.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
          {tagsList.map((tech, idx) => (
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
