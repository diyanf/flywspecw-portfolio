'use client';

import { useState } from 'react';

export default function TaskTracker() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input]);
    setInput('');
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
      <h2 className="text-xl font-bold text-amber-400">Task Tracker</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah tugas baru..."
          className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-amber-400"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 font-semibold rounded-lg text-slate-950 transition"
        >
          Tambah
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li key={idx} className="p-3 bg-slate-800/50 rounded-lg text-slate-300">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}