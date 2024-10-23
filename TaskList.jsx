import React from 'react';

function TaskList() {
  const tasks = [
    { id: 1, text: 'Hit the gym for 2 hours' },
    { id: 2, text: 'Do cardio for 1 hour' },
    { id: 3, text: 'Eat protien rich food ' },
   
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}

export default TaskList;