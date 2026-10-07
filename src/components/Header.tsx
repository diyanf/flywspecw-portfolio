import { profileData } from '@/data/profile';

export default function Header() {
  return (
    <header className="max-w-4xl w-full mx-auto px-6 py-8 flex justify-between items-center">
      <div className="text-2xl font-black tracking-wider text-indigo-400 uppercase">
        {profileData.brandName}
      </div>
      <div className="flex items-center space-x-3">
        <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/40 hover:bg-indigo-600 hover:text-white transition text-indigo-300 text-sm font-medium">
          Twitter / X
        </a>
        <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-sm font-medium transition">
          GitHub
        </a>
      </div>
    </header>
  );
}
