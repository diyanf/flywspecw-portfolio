import { profileData } from '@/data/profile';

export default function BioSection() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
        <span>{profileData.badgeStatus}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
        {profileData.username} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          {profileData.roleTitle}
        </span>
      </h1>

      <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
        {profileData.bio}
      </p>

      <div className="flex gap-4 pt-2">
        <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/25">
          Connect on Twitter / X
        </a>
      </div>
    </section>
  );
}
