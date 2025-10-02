// components/TaskItem.tsx
"use client";
import { Trash2, CheckCircle2 } from "lucide-react";

export default function TaskItem({ task, onChange }: { task: any; onChange: () => void }) {
  async function toggleComplete() {
    await fetch("/api/tasks", {
      method: "PUT",
      body: JSON.stringify({ id: task.id, completed: !task.completed }),
      headers: { "Content-Type": "application/json" }
    });
    onChange();
  }
  async function removeTask() {
    await fetch("/api/tasks", {
      method: "DELETE",
      body: JSON.stringify({ id: task.id }),
      headers: { "Content-Type": "application/json" }
    });
    onChange();
  }
  return (
    <li
      className={`group flex items-center bg-white rounded-2xl shadow-md px-4 py-3 gap-4 transition-all border-l-4 ${
        task.completed ? "border-green-500 opacity-70" : "border-blue-400"
      }`}
    >
      <button
        onClick={toggleComplete}
        aria-label="Completar tarea"
        className={`transition rounded-full p-1 hover:bg-blue-50`}
      >
        {task.completed ? (
          <CheckCircle2 className="text-green-500" size={28} />
        ) : (
          <span className="inline-block w-7 h-7 border-2 border-gray-300 rounded-full"></span>
        )}
      </button>
      <span
        className={`flex-1 text-lg select-none transition ${
          task.completed ? "line-through text-gray-400 italic" : "text-gray-800"
        }`}
      >
        {task.title}
      </span>
      <button
        onClick={removeTask}
        aria-label="Eliminar tarea"
        className="opacity-60 group-hover:opacity-100 text-red-400 hover:text-red-600 transition"
      >
        <Trash2 size={22} />
      </button>
    </li>
  );
}
