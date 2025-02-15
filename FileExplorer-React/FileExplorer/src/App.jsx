import { useState } from "react";
import json from "./data.json";
import "./App.css";

// Render list of objects recursively
const List = ({ list }) => {
  // create map to store open folders status as key value pair
  const [open, setOpen] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setOpen((prev) => ({ ...prev, [node.name]: !prev[node.name] }))
              }
            >
              {open?.[node.name] ? "- " : "+ "}
            </span>
          )}
          <span>{node.name}</span>
          {open?.[node.name] && node?.children && <List list={node.children} />}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [data, setData] = useState(json);

  return (
    <div className="App">
      <List list={data} />
    </div>
  );
}

export default App;
