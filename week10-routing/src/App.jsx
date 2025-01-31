// toggle the bulb

import { useState } from "react";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

const LightBulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(true);
  return (
    <div>
      <BulbState isBulbOn={isBulbOn} />
      <ToggleBulbState setIsBulbOn={setIsBulbOn} />
    </div>
  );
};

// here we need isBulbOn
const BulbState = ({ isBulbOn }) => {
  return <div>{isBulbOn ? "Bulb is ON" : "Bulb is OFF"}</div>;
};

// here we need setIsBulbOn
const ToggleBulbState = ({ setIsBulbOn }) => {
  const checkStatus = () => {
    // how this line of code is working
    setIsBulbOn((currentState) => !currentState);
  };

  return (
    <div>
      <button onClick={checkStatus}> Toggle the Bulb </button>
    </div>
  );
};

export default App;

/*
when we need to pass variable to child component separately then in that case we need to rolling up the
state, means instead of declaring the state variable under the child component we can declare that 
variable in the LCA and from there with the help of props we pass the variable to the child.









Initialize the fresh react project
==================================
1. npm create vite@Latest
2. npm install
3. npm run dev

*/
