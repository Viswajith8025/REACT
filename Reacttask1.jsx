import React from 'react';
import './App.css';

function People({ people }) {
  return (
    <div>
      {people.map(person => (
        <div key={person.name}>
          <img src={person.photo} alt={person.name} />
          <h2>{person.name}</h2>
          <p> {person.jobTitle} </p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const people = [
    {
      name: 'Adam Jonson',
      jobTitle: 'Developer',
      photo: 'https://example.com/adam-jonson.jpg'
    },
    {
      name: 'Linda Larson',
      jobTitle: 'Manager',
      photo: 'https://example.com/linda-larson.jpg'
    },
    {
      name: 'Marry Hudson',
      jobTitle: 'Designer',
      photo: 'https://example.com/mary-hudson.jpg'
    },
    {
      name: 'Nina Hudson',
      jobTitle: 'Designer',
      photo: 'https://example.com/nina-hudson.jpg'
    },
    {
      name: 'Margo Larson',
      jobTitle: 'Manager',
      photo: 'https://example.com/margo-larson.jpg'
    },
    {
      name: 'Nicole Scavo',
      jobTitle: 'Manager',
      photo: 'https://example.com/nicole-scavo.jpg'
    }
  ];

  return (
    <div className="App">
      <h1> People </h1>
      <People people={people} />
    </div>
  );
}

export default App;