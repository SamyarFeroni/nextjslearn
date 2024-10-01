"use client";
import { useQuery } from "@tanstack/react-query";

//Function for Fetch Data from the this web
async function fetchTodoById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) {
    throw new Error("This ID is not Found");
  }
  return res.json();
};

//component for show user by ID number
export default function TodoDetail({ params }) {
  const { id } = params;
  const {data: todo,error,isLoading,} = useQuery({
    queryKey: ["todo", id],
    queryFn: () => fetchTodoById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Todo Details</h2>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
};
