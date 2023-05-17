import './App.css';
import {useEffect, useState} from "react";
//import { ReactDOM } from 'react';

function App() {
  /*todo_list 출력
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
  */
  //let dollar;
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //위에 줄은 비어있는 배열로 지정해서 undefined 되지 않게 한다.
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  return(
    <div>
      <h1>코인판!!{loading ? "" : `(${coins.length})`}</h1>
      <select>
        {coins.map((coin) =>(
          <option>
            {coin.symbol};
          </option>
        ))}
      </select>
      {loading ? <strong>Loading...</strong>:(
        <select>
        {coins.map((coin,) =>(
          <option>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} 달러 
          </option>
        ))}
      </select>
      )}
      
    </div>
  );
}

export default App;
