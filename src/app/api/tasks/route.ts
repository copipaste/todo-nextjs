// app/api/tasks/route.ts
import { prisma } from "../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET: Lista todas las tareas
export async function GET() {
  const tasks = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(tasks);
}

// POST: Crear tarea
export async function POST(req: NextRequest) {
  const { title } = await req.json();
  const newTask = await prisma.task.create({ data: { title } });
  return NextResponse.json(newTask);
}

// PUT: Actualiza tarea
export async function PUT(req: NextRequest) {
  const { id, completed } = await req.json();
  const updated = await prisma.task.update({
    where: { id },
    data: { completed }
  });
  return NextResponse.json(updated);
}

// DELETE: Elimina tarea
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await prisma.task.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
