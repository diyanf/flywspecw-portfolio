'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';

export interface TaskItem {
  id: string;
  projectName: string;
  chain: string;
  type: string;
  sourceLink: string;
  status: string;
  time: string;
}

export default function TaskTrackerPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  
  // Form input state
  const [projectName, setProjectName] = useState('');
  const [chain, setChain] = useState('');
  const [type, setType] = useState('Testnet');
  const [sourceLink, setSourceLink] = useState('');
  const [status, setStatus] = useState('Ongoing');
  const [time, setTime] = useState('');

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<TaskItem | null>(null);

  // Load data dari LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('task_tracker_data');
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse tasks from localStorage', e);
      }
    }
  }, []);

  // Simpan data ke LocalStorage
  useEffect(() => {
    localStorage.setItem('task_tracker_data', JSON.stringify(tasks));
  }, [tasks]);

  // Handle Tambah Task Baru
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    const newTask: TaskItem = {
      id: Date.now().toString(),
      projectName,
      chain: chain || '-',
      type: type || 'Testnet',
      sourceLink: sourceLink || '#',
      status: status || 'Ongoing',
      time: time || new Date().toISOString().slice(0, 10),
    };

    setTasks((prev) => [...prev, newTask]);

    // Reset Form Input
    setProjectName('');
    setChain('');
    setType('Testnet');
    setSourceLink('');
    setStatus('Ongoing');
    setTime('');
  };

  // Handle Hapus Task
  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Handle Mulai Edit Task
  const handleStartEdit = (task: TaskItem) => {
    setEditingId(task.id);
    setEditForm({ ...task });
  };

  // Handle Batal Edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  // Handle Simpan Edit
  const handleSaveEdit = (id: string) => {
    if (!editForm) return;
    setTasks((prev) =>
      prev.map((item) => (item.id === id ? editForm : item))
    );
    setEditingId(null);
    setEditForm(null);
  };

  // Handle Export ke File JSON
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `task-tracker-${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Handle Import dari File JSON
  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsedData = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsedData)) {
            setTasks(parsedData);
          } else {
            alert('Format file JSON tidak valid!');
          }
        } catch (err) {
          alert('Gagal membaca file JSON!');
        }
      };
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 max-w-7xl mx-auto space-y-8">
      {/* Header & Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <Link href="/" className="text-xs text-amber-400 hover:underline mb-1 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="text-2xl font-bold text-white">Task Tracker Tool</h1>
          <p className="text-slate-400 text-xs mt-1">Manage, track, edit, and back up your daily crypto & Web3 tasks.</p>
        </div>

        {/* Action Buttons: Import & Export */}
        <div className="flex items-center gap-3">
          <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-2 rounded-lg border border-slate-700 transition">
            Import JSON
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>
          <button
            onClick={handleExport}
            type="button"
            className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs px-3 py-2 rounded-lg border border-amber-500/30 transition"
          >
            Export JSON
          </button>
        </div>
      </div>

      {/* Form Input Task */}
      <form onSubmit={handleAddTask} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-4">
        <h2 className="text-sm font-semibold text-slate-300">Add New Task</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          <input
            type="text"
            placeholder="Project Name *"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
          <input
            type="text"
            placeholder="Chain (e.g. Monad, Sui)"
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          >
            <option value="Testnet">Testnet</option>
            <option value="Mainnet">Mainnet</option>
            <option value="Presale">Presale</option>
            <option value="Node Validator">Node Validator</option>
            <option value="Waitlist">Waitlist</option>
            <option value="Airdrop">Airdrop</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Source Link (https://...)"
            value={sourceLink}
            onChange={(e) => setSourceLink(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
          {/* Input Status */}
          <input
            type="text"
            placeholder="Status (e.g. Ongoing, Done, GTD)"
            list="status-options"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
          <datalist id="status-options">
            <option value="Ongoing" />
            <option value="Done" />
            <option value="Pending" />
            <option value="To-Do" />
            <option value="GTD" />
          </datalist>

          <input
            type="text"
            placeholder="Time / Date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-xs px-5 py-2 rounded-lg transition"
          >
            + Add Task
          </button>
        </div>
      </form>

      {/* Tabel Task */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 text-xs">
              <th className="p-4 font-semibold">Project Name</th>
              <th className="p-4 font-semibold">Chain</th>
              <th className="p-4 font-semibold">Type</th>
              <th className="p-4 font-semibold">Source Link</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Time</th>
              <th className="p-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs">
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-slate-500">
                  No tasks recorded yet. Fill out the form above to add your first task.
                </td>
              </tr>
            ) : (
              tasks.map((task) => {
                const isEditing = editingId === task.id;

                if (isEditing && editForm) {
                  return (
                    <tr key={task.id} className="bg-slate-800/50">
                      <td className="p-2">
                        <input
                          type="text"
                          value={editForm.projectName}
                          onChange={(e) => setEditForm({ ...editForm, projectName: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={editForm.chain}
                          onChange={(e) => setEditForm({ ...editForm, chain: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white"
                        />
                      </td>
                      <td className="p-2">
                        <select
                          value={editForm.type}
                          onChange={(e) => setEditForm({ ...editForm, type: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white"
                        >
                          <option value="Testnet">Testnet</option>
                          <option value="Mainnet">Mainnet</option>
                          <option value="Presale">Presale</option>
                          <option value="Node Validator">Node Validator</option>
                          <option value="Waitlist">Waitlist</option>
                          <option value="Airdrop">Airdrop</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={editForm.sourceLink}
                          onChange={(e) => setEditForm({ ...editForm, sourceLink: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={editForm.status}
                          onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={editForm.time}
                          onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white"
                        />
                      </td>
                      <td className="p-2 text-right space-x-2">
                        <button
                          onClick={() => handleSaveEdit(task.id)}
                          type="button"
                          className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 px-2 py-1 rounded text-xs border border-emerald-500/30 transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          type="button"
                          className="bg-slate-700 text-slate-300 hover:bg-slate-600 px-2 py-1 rounded text-xs transition"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={task.id} className="hover:bg-slate-900/40 transition">
                    <td className="p-4 font-medium text-slate-100">{task.projectName}</td>
                    <td className="p-4 text-slate-300">{task.chain}</td>
                    <td className="p-4">
                      <span className="inline-block text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                        {task.type}
                      </span>
                    </td>
                    <td className="p-4">
                      {task.sourceLink && task.sourceLink !== '#' ? (
                        <a
                          href={task.sourceLink.startsWith('http') ? task.sourceLink : `https://${task.sourceLink}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-400 hover:underline truncate max-w-[150px] inline-block"
                        >
                          {task.sourceLink}
                        </a>
                      ) : (
                        <span className="text-slate-500">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="inline-block text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {task.status || 'Ongoing'}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400">{task.time}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleStartEdit(task)}
                        type="button"
                        className="text-sky-400 hover:text-sky-300 font-semibold text-xs px-2 py-1 rounded bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.id)}
                        type="button"
                        className="text-red-400 hover:text-red-300 font-semibold text-xs px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
