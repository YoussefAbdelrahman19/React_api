import { useState } from "react";
import Input from "./Input";

function Test() {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <p> Test runing </p>
      <p>Hello all is running good </p>
      <p>Is this ok! and the user is {counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Change
      </button>
      <br />
      <Input label="Your Name" type="text" />
      <hr />

      <Input label="Enter Your Age: " type="number" />
    </>
  );
}

export default Test;
