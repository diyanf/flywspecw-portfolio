'use client';

import { useState, useEffect, ChangeEvent } from 'react';

interface Task {
  id: string;
  title: string;
  category: string;
  completed: boolean;
}

const DEFAULT_TASKS: Task[] = [
  { id: '1', title: 'Interact with Testnet DEX', category: 'Monad', completed: false },
  { id: '2', title: 'Check Node Validator Status', category: 'Canton', completed: true },
  { id: '3', title: 'Daily Faucet Claim', category: 'Berachain', completed: false },
];

export default function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('flywspecw_tasks');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        setTasks(DEFAULT_TASKS);
      }
    } else {
      setTasks(DEFAULT_TASKS);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('flywspecw_tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = () => {
    if (!newTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      category: newCategory.trim() || 'General',
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTitle('');
    setNewCategory('');
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const exportData = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(tasks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute(
      'download',
      `airdrop_tasks_backup_${new Date().toISOString().slice(0, 10)}.json`
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importData = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsed)) {
            setTasks(parsed);
            alert('Berhasil mengimpor daftar tugas!');
          } else {
            alert('Format file JSON tidak valid.');
          }
        } catch (err) {
          alert('Gagal membaca file JSON.');
        }
      };
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent =
    tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  if (!isLoaded) return null;

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-amber-300">🎯 Airdrop Task & Progress Tracker</h3>
          <p className="text-xs text-slate-400">
            Kelola & catat progres tugas testnet/ecosystem kamu. Data tersimpan di browser.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportData}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded border border-slate-700 transition"
          >
            📥 Export JSON
          </button>
          <label className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded border border-slate-700 cursor-pointer transition">
            📤 Import JSON
            <input type="file" accept=".json" onChange={importData} className="hidden" />
          </label>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-slate-400">
            Progress: {completedCount} / {tasks.length} Completed
          </span>
          <span className="text-amber-400 font-bold">{progressPercent}%</span>
        </div>
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Nama tugas (misal: Daily Swap di DEX)..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
        />
        <input
          type="text"
          placeholder="Ekosistem (misal: Monad)"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="w-full sm:w-48 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
        />
        <button
          onClick={addTask}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition"
        >
          + Tambah
        </button>
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
        {tasks.length === 0 ? (
          <p className="text-xs text-slate-500 text-center py-4">
            Belum ada tugas. Tambahkan tugas pertamamu di atas!
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-lg border text-xs transition ${
                task.completed
                  ? 'bg-slate-950/40 border-slate-800/60 text-slate-500 line-through'
                  : 'bg-slate-950 border-slate-800 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-4 h-4 accent-amber-500 cursor-pointer"
                />
                <span>{task.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {task.category}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-slate-500 hover:text-red-400 font-bold px-2 py-0.5 transition"
                title="Hapus"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}