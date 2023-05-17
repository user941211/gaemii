import './App.css';
import {useState} from "react";
//import { ReactDOM } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  //console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ===""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  //form 내에서 button이 한개만 있으면 자동적으로 submit의 역할을 한다.
  return (
    <div>
      <h1>ToDo 리스트!!({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo} 
          type ="text" 
          placeholder="입력"
        />
        <button>ADD</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
