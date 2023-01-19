import { useState } from "react";
function Input(props) {
  let [value, setValue] = useState("");
  return (
    <>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <p>the inpt value is {value}</p>
    </>
  );
}

export default Input;
