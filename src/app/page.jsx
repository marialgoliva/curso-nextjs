import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/taskCard";

async function loadTasks() {
  //obteniendo de la base de datos
  //haciendo una peticion a http/api/tasks
  const res = await fetch("http://localhost:3000/api/tasks");
  return await res.json();
}

async function HomePage() {
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
