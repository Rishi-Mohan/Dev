import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({}); // initializing it with the empty object

  const fetchdata = async () => {
    // if the key is already present then retrieve the result
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }

    console.log("log" + input);
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    const data = await response.json();
    setResults(data?.recipes);
    // logic for the caching
    // NOTE : we have to append the key value to the object not replace it
    // first we take prev value and then append the current key-pair as a data
    setCache((prev) => ({ ...prev, [input]: data?.recipes }));
  };

  useEffect(() => {
    // why it is not working if we are passing fetchdata();
    const timer = setTimeout(fetchdata, 300);
    // why it is required to return like this
    return () => {
      clearTimeout(timer);
    };
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
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
        {showResult && (
          <div className="result-container">
            {results.map((r) => (
              <span className="result" key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

/**
 * Q1: where will we get data from ?
 *
 *
 * for every change we are making an api call that is real problem
 * we need to reduce the number of api call so that if millions of user
 * are using the component, then still the number of api calls are optimized
 *
 *
 * To solve this issue we will use Debouncing.
 *
 *Q2: can we optimize it further so that it somehow cached the results for the keyword
      There are multiple way to cache the results 
       a) using state Variable that will be valid only for the session
       b) using the local storage such that if user comes again then it will be reserved
 
  enhancement:
   a) arrow key selection
 
 
*/
