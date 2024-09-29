interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function TodoList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  const todos: Todo[] = await res.json();

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
