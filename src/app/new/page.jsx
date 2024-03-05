"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  console.log(params)
  const router = useRouter();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetch(`/api/tasks/${params.id}`)
    .then(res => res.json())
    .then(data => {console.log(data)});
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          type="text"
          placeholder="Título"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          rows="3"
          placeholder="Describe tu tarea"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
