import { Todo } from "../todo";

export default async function TodoDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!res.ok) {
    throw new Error("This ID is not Founded (try 200>ID)");
  }

  const todo: Todo = await res.json();

  return (
    <div>
      <h2>Todo Details</h2>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}
