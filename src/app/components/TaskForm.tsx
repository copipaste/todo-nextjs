// components/TaskForm.tsx
"use client";
import { useState } from "react";
import { Plus } from "lucide-react"; // O usa cualquier icono que prefieras

export default function TaskForm({ onAdd }: { onAdd: () => void }) {
  const [title, setTitle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" }
    });
    setTitle("");
    onAdd();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 bg-white rounded-2xl shadow-md p-3 transition focus-within:ring-2 ring-blue-500"
    >
      <input
        className="flex-1 p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition"
        placeholder="Agrega una nueva tarea..."
        value={title}
        maxLength={80}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
        type="submit"
        aria-label="Agregar tarea"
      >
        <Plus size={18} />
        Agregar
      </button>
    </form>
  );
}
