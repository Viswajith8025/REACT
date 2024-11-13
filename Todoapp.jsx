import React, { useState } from "react";


export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
    setTaskText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingTaskId(id);
    setEditText(text);
  };

  const editTask = () => {
    setTasks(tasks.map(task => 
      task.id === editingTaskId ? { ...task, text: editText } : task
    ));
    setEditingTaskId(null);
    setEditText("");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-6 bg-black bg-opacity-75">
        <h1 className="text-4xl font-bold text-center">Todo Application</h1>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            className="border border-gray-600 bg-gray-800 p-2 rounded-l-md w-1/2"
            placeholder="Add a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button 
            className="bg-green-600 text-white p-2 rounded-r-md hover:bg-green-700"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
      </header>
      
      <main className="p-6">
        <ul className="space-y-4">
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center bg-gray-800 p-3 rounded">
              {editingTaskId === task.id ? (
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    className="border border-gray-600 bg-gray-800 p-2 w-full"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    className="ml-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    onClick={editTask}
                  >
                    Save
                  </button>
                  <button
                    className="ml-2 bg-red-600 text-white p-2 rounded hover:bg-red-700"
                    onClick={() => setEditingTaskId(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center w-full">
                  <span className="flex-grow">{task.text}</span>
                  <button
                    className="ml-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                    onClick={() => startEditing(task.id, task.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 bg-red-600 text-white p-2 rounded hover:bg-red-700"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </main>
      
      <footer className="p-4 text-center bg-gray-800">
        <p className="text-gray-400">Simple Todo App with React</p>
      </footer>
    </div>
  );
};

export default TodoApp;
