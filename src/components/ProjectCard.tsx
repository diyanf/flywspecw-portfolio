import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition duration-300">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-xs px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 font-mono">
            {project.category}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
