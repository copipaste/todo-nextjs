// components/TaskList.tsx
"use client";
import TaskItem from "./TaskItem";
import { Task } from "./interface";

export default function TaskList({ tasks, onChange }: { tasks: Task[]; onChange: () => void }) {
  if (!tasks.length)
    return (
      <div className="text-center py-8 text-gray-400 text-lg">
        No hay tareas pendientes 💤
      </div>
    );
  return (
    <ul className="flex flex-col gap-3 animate-fadeIn">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onChange={onChange} />
      ))}
    </ul>
  );
}
