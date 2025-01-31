import { useRef, useState } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  // const [timer, setTimer] = useState(0);
  const timerRef = useRef();
  function startClock() {
    let val = setInterval(function () {
      setCurrentCount((c) => c + 1);
    }, 1000);
    timerRef.current = val;
    // setTimer(val);
  }

  function stopClock() {
    clearInterval(timerRef.current);
    // clearInterval(timer);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button ref={timerRef} onClick={stopClock}>
        Stop
      </button>
    </div>
  );
}

export default App;

/*
useRef : reference to a value, such that when you change the value, the component DOES NOT RE-RENDER.

if we use useState() hook to change the value then it leads to the re-render of the component.

UseCase2 : Clock with start and stop functionality
-------------------------------------------------
to start a clock we have to call setInterval method and for each second of time we will update.
to stop the clock we need to call clearInterval method.

        Catch : to keep the value of timer while stopping so that we can restart from the same moment.
        a) use normal variable and store the value BUT it will not work because everytime state variable
            called then re-render happens and it leads to the resetting the value of timer variable.

        Q) what if click multiple time start button, why it is bahaving strange.

we can use useState hook to store the value, but it leads to one extra re-render. just after clicking
the start button, because we update the setTimer variable just after clicking the start button

        Q) when we are console log the timer variable in the stopClock() funtion what is the value it 
            it printing, kind of weird value it is.

To avoid that extra re-rendering we can use useRef() ==> BEST METHOD






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
