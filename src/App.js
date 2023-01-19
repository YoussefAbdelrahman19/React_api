// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Header from "./Components/Header";
// import HavsCalculator from "./Components/Havs";
// import Test from "./Components/Test.js";
// import ClassComp from "./Components/ClassComp";
import ClassForm from "./Components/ClassForm";
import FunctionForm from "./Components/FunctionForm";
import List from "./Components/List.js";
import { useState } from "react";

function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let elem;

  return (
    <>
      <div>running</div>
      <p>{elem}</p>
      <div class="d-grid gap-2">
        <button
          type="button"
          name=""
          id=""
          class="btn btn-primary"
          onClick={() => setLoggedIn(!loggedIn)}
        >
          Log In
        </button>
        {loggedIn
          ? (elem = <h1>User Logged In</h1>)
          : (elem = <h1>User Not Logged In</h1>)}
        <List />
      </div>
    </>
  );
}

export default App;
