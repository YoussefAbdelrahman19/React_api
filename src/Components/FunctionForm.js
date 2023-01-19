import { useState } from "react";
function FunctinFom() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  return (
    <>
      <div>
        <div>class component</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({
              name,
              age,
              gender,
            });
          }}
        >
          <label className="h4">Enter You Name :</label>
          <input
            type="text"
            name=""
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />

          <label className="h4">Enter You Ages :</label>
          <input
            type="text"
            name=""
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br />

          <label className="h4">Gender :</label>
          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="0">Select One</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <button type="submit">Submit form</button>
        </form>
      </div>
    </>
  );
}

export default FunctinFom;
