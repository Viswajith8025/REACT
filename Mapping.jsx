import React from 'react';
import img from './zoro.png'

export const File = () => {
  const data = [
    { id: 1, name: 'jithu' ,image:img},
    { id: 2, name: 'sasi' ,image:img }
  ];

  return (
    <div>
      {data.map((user) => (
        <div>
          <h1>{user.id}</h1>
          <h1>{user.name}</h1>
          <img src={user.image} width="200" height="300"></img>
        </div>
      ))}
      
    </div>

    
  );
};
