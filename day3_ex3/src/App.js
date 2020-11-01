import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NameList from "./NameList";
import NewName from "./NewName";
import { v1 as uuid } from "uuid";

function App() {
  const initialData = [
    { id: uuid(), name: "John" },
    { id: uuid(), name: "Kim" },
    { id: uuid(), name: "Svend" },
  ];
  const [names, setNames] = useState(initialData);
  const [newName, setNewName] = useState({ id: "", name: "" });
  console.log(names);

  const addName = (name) => {
    if (name.id === "") {
      // id=-1 Indicates a new object
      name.id = uuid();
      names.push(name);
    }
    setNames([...names]);
    setNewName({ id: "", name: "" });
  };

  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>
        Props and Lifting State Demo
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <NameList names={names} />
        </div>
        <div className="col-5 new-todo">
          <NewName addName={addName} nextName={newName} />
        </div>
      </div>
    </div>
  );
}
export default App;
