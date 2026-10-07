import Link from 'next/link';
import { CustomProject } from '../data/customProjects';

export default function CustomProjectCard({ project }: { project: CustomProject }) {
  return (
    <div className="bg-slate-900/40 border border-dashed border-amber-500/30 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/60 transition duration-300 space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-amber-200">{project.title}</h3>
          <span className="text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 font-mono border border-amber-500/20">
            {project.status}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
        
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-300">Planned Features:</span>
          <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5">
            {project.featuresPlanned.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tombol Menuju Halaman Tool */}
      {project.link ? (
        <Link
          href={project.link}
          className="w-full text-center bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold text-xs py-2.5 rounded-lg transition"
        >
          🚀 Launch Tool
        </Link>
      ) : (
        <span className="w-full text-center bg-slate-800/40 text-slate-500 border border-slate-800 font-medium text-xs py-2.5 rounded-lg cursor-not-allowed">
          In Development
        </span>
      )}
    </div>
  );
}
