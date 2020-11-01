import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");

  function handleChange(event){
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setName(value);

  }
  function handleSubmit(event) {
    event.preventDefault();
    window.alert(JSON.stringify(name))

  }
 
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
          Name:
          <input id="name" type="text" value={name} 
          placeholder="Name"/> 
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
