import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { exampleApi } from '../api/index';
import { useQuery, useMutation } from 'react-query';

const queryClient = new QueryClient();

function Todos() {
  const { data, isLoading, error } = useQuery('getTodos', exampleApi.getTodos);
  const [createTodo] = useMutation(exampleApi.createTodo);
  const [updateTodo] = useMutation(exampleApi.updateTodo);
  const [deleteTodo] = useMutation(exampleApi.deleteTodo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const todos = Array.isArray(data) ? data : Object.values(data || {});
  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                updateTodo({ id: todo.id, completed: !todo.completed })
              }
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>No todos found</div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.elements.text.value;
          createTodo({
            text,
            completed: false,
          });
          e.target.reset();
        }}
      >
        <input type="text" name="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
  
}

export default Todos;


