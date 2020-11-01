import './App.css';
import Count from "./Count"

function App() {
  return (
    <div className="App">
          <Count init={10} inc={5} />
    </div>
  );
}

export default App;
