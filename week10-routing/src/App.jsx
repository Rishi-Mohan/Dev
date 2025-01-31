function App() {
  function focusOnInput() {
    document.getElementById("name").focus();
  }
  return (
    <div>
      Sign Up
      <input id="name" type={"text"}></input>
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

*/
