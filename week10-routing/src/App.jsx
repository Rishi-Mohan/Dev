import { useRef } from "react";

function App() {
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      Sign Up
      <input ref={inputRef} type={"text"}></input>
      <input type={"password"}></input>
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}

export default App;

/*
UseCase1 : From console try to move the cursor to the first text box when someone clicked on the submit button.
--------

As we are doing it on console so we have to apply timeout of 3 sec.
But if we go by the code then directly based on the ID we can manipulate the DOM element.

window.setTimeout(function(){
  document.getElementById("name").focus()
}, 3000);


it is not a good way to use getElementById() while using react, Better way is to use ref() hooks
to refer the dom element

ref attribute tells us to which dom element need to be taken care 
and whatever the process we want to apply in the dom element we define using .current method.

*/
