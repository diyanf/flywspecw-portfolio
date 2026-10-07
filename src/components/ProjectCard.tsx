export interface Project {
  id: string;
  title: string;
  role?: string;
  period?: string;
  description: string;
  achievements?: string[];
  techStack?: string[];
}

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
            {project.role && <p className="text-xs text-amber-400 font-medium">{project.role}</p>}
          </div>
          {project.period && (
            <span className="text-xs font-mono text-slate-500 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
              {project.period}
            </span>
          )}
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {project.achievements && project.achievements.length > 0 && (
          <ul className="space-y-1 list-disc list-inside text-xs text-slate-300">
            {project.achievements.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {project
