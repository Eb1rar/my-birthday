import { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="container">
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </main>
  );
}

export default App;
