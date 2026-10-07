'use client';

import Link from 'next/link';
import TaskTracker from '@/components/TaskTracker';

export default function TaskTrackerPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
        >
          ← Back to Portfolio
        </Link>

        <TaskTracker />
      </div>
    </div>
  );
}