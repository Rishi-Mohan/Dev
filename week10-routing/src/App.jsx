// toggle the bulb

import { createContext, useState, useContext } from "react";

const BulbContext = createContext();

// yaha pa humne ek wrapper banaya hai jo ki sare ugly logic ko contain karega 
// and hum usko use direct karenga

function BulbProvider({ children }) {
  const [isBulbOn, setIsBulbOn] = useState(true);
  return (
    <BulbContext.Provider
      value={{
        isBulbOn: isBulbOn,
        setIsBulbOn: setIsBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </div>
  );
}

const LightBulb = () => {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
};

const BulbState = () => {
  const { isBulbOn } = useContext(BulbContext);
  return <div>{isBulbOn ? "Bulb is ON" : "Bulb is OFF"}</div>;
};

const ToggleBulbState = () => {
  const { setIsBulbOn } = useContext(BulbContext);
  const checkStatus = () => {
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
Context API
used to manage a state across the application

jargon:

a) Context : it serves as a container for the data you want to share
b) Provider: Any container that is the child of this provider can the access the context.
c) Consumer: It allows us to access the context value.


useContext Returns a object so we can destructure it on the fly 






Initialize the fresh react project
==================================
1. npm create vite@Latest
2. npm install
3. npm run dev

*/
