import { useState } from "react";
import json from "./data.json";
import "./App.css";

// Render list of objects recursively
const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  // create map to store open folders status as key value pair
  const [open, setOpen] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setOpen((prev) => ({ ...prev, [node.id]: !prev[node.id] }))
              }
            >
              {open?.[node.id] ? "- " : "+ "}
            </span>
          )}

          <span>{node.name}</span>
          {node?.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img
                src="https://imgs.search.brave.com/LdA66rAuqnemhpBEkZZZqzepsYOJqVxJD1bgmuIcq9s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QzLzZh/LzllL2QzNmE5ZTkz/NWE3YmZhMjBmNjZk/ZWQxNTRkZTIxNTlh/LmpwZw"
                alt="icon"
                className="icon"
              ></img>
            </span>
          )}
          <span onClick={() => deleteNodeFromList(node.id)}>
            <img
              src="https://imgs.search.brave.com/ReLiuQIb3sVMS-L0Jz9I7hCwSSL0XrPwACz90B7VzMM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzA5LzA3LzQ5/LzM2MF9GXzUwOTA3/NDkxNV92SXBrNHNs/Sm9rVXlYcmRENEFP/QVl3V043R2lONEZy/Yi5qcGc"
              alt="icon"
              className="icon"
            ></img>
          </span>
          {open?.[node.id] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name of the folder");

    // DFS
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id == parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                // if we are not using toString then it is showing different behaviour why?
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }

        return node;
      });
    };
    // update my json structure based on the data that is returning from the function called
    // with prev data as a parameter
    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };
  return (
    <div className="App">
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
}

export default App;
