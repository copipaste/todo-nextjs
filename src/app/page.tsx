// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
  async function fetchTasks() {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  }

  useEffect(() => { fetchTasks(); }, []);

  return (
    <main className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">📝 To Do List</h1>
      <TaskForm onAdd={fetchTasks} />
      <TaskList tasks={tasks} onChange={fetchTasks} />
    </main>
  );
}
