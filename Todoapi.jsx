import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching the todos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-4">
        {todos.map(todo => (
          <li key={todo.id} className={`p-4 border rounded-lg ${todo.completed ? 'bg-green-100' : 'bg-red-100'}`}>
            <h2 className="font-semibold">{todo.title}</h2>
            <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
