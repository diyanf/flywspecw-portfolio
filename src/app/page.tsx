import Header from '@/components/Header';
import BioSection from '@/components/BioSection';
import ProjectCard from '@/components/ProjectCard';
import CustomProjectCard from '@/components/CustomProjectCard';
import { historyProjects } from '@/data/projects';
import { customProjects } from '@/data/customProjects';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl w-full mx-auto px-6 py-10 space-y-16">
        <BioSection />

        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-white">On-Chain Footprint & History</h2>
            <p className="text-slate-400 text-sm">Testnets, NFT collections, and ecosystem participation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historyProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl font-bold text-amber-300">Personal & In-Development Projects</h2>
            <p className="text-slate-400 text-sm">Custom tools and concepts currently being built.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customProjects.map((item) => (
              <CustomProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-4xl w-full mx-auto px-6 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        flywspecw • Deployed on Vercel
      </footer>
    </div>
  );
}
