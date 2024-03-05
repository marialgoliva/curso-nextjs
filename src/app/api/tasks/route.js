import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);

  return NextResponse.json(tasks);
}

export async function POST(request) {
  // const data = await request.json()
  const { title, description } = await request.json();

  const newTask = await prisma.task.create({
    data: {
      // title: data.title,
      // description: data.description
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
}
