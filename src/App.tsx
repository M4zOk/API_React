import React, {FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [id, setId] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json()
    console.log(data);
  };


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <h1>
        ID:<input value={id} onChange={e => setId(e.target.value)}/>
      </h1>

      <button>Получить данные!</button>
      </form>

  );
}

export default App;
