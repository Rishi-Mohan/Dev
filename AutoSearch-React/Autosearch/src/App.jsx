import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const fetchdata = async () => {
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    const data = await response.json();
    console.log(data?.recipes);
    setResults(data?.recipes);
  };

  useEffect(() => {
    fetchdata();
  }, [input]);

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={()=>setShowResult(true)}
          onBlur={()=>setShowResult(false)}
        />
        {showResult && (<div className="result-container">
          {results.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>)}
      </div>
    </div>
  );
}

export default App;

/**
 * Q1: where will we get data from ?
 * 
 * 
 * 
 */
