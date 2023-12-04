import "./App.css";
import List from "./List";
import data from "./data";
function App() {
  return (
    <main>
      <div className="container">
        <List data={data} />
        <button>Clear All</button>
      </div>
    </main>
  );
}

export default App;
