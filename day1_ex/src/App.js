import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person from "./file2";
import { MultiWelcome } from "./file3"


const {firstName, email} = person;


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <h2>{firstName}  {email}</h2>
      <h2><MultiWelcome/></h2>
      </header>
    </div>
  );
}

export default App;
