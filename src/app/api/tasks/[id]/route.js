import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id)
    }

  })
  console.log(task)
  return NextResponse.json("Obteniendo tarea " + params.id);
}

export async function PUT(request, { params }) {
  const data = await request.json()
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    data: data
  })
  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id)
      }
    })
    console.log(taskRemoved);
    return NextResponse.json("Eliminando tarea " + params.id);

  } catch(error) {
    return NextResponse.json(error.message);
  }
}
