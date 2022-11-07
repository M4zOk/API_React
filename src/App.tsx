import React, {FormEvent, useState} from 'react';
import './App.css';

type Post = {
    id: string;
    userID: string;
    body: string;
    title: string;
}

type Post2={
    name: string;
    email: string;

}

function App() {

  const [id, setId] = useState("");
  const [post, setPost]= useState<Post | undefined> ();
  const [post2, setPost2]= useState<Post2 | undefined> ();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    setPost(data);

    const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
    const data2 = await response2.json();
    setPost(data);
      setPost2(data2);
    console.log(data);

  };


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <h1>
        ID:<input value={id} onChange={e => setId(e.target.value)}/>
      </h1>

      <button>Получить данные!</button><br/>

      <b>{post?.title}</b><br/>
       {post?.body}
       <br/>
       <br/>
        <b>{post2?.name}</b><br/>
          {post2?.email}
      </form>
    </div>
  );
}

export default App;
