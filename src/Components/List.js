import { React, useRef, useState, useEffect } from "react";
import ClassComp from "./ClassComp";

function List() {
  let [name, setName] = useState("");
  let [age1, setage1] = useState(10);
  let [age2, setage2] = useState(20);
  let [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const textInput = useRef(null);
  let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date("2018-03-03"),
      capacity: 5,
    },
  ];
  let carColor = cars.map((c) => {
    return (
      <li ref={textInput}>
        <label className="text-primary fs-4">{c.color}</label>
      </li>
    );
  });

  useEffect(() => {
    console.log("age 1, age 2", age1, age2);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(data);
      });
    // setage1(age1 + 1);
    // setInterval(() => {
    //   setCount((count) => count + 1);
    // }, 1000);
  }, [age1]);

  return (
    <>
      <div>
        {
          <p>
            {data.map((c) => (
              <>
                <div className="table-responsive">
                  <table className="table table-primary">
                    <thead>
                      <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td scope="row">{c.userId}</td>
                        <td>{c.id}</td>
                        <td>{c.title}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ))}
          </p>
        }
      </div>
      <ClassComp />
      incrementAge
      <div>
        Nama is :{name} {count} {Date.now}
      </div>
      <div>div age1 is : {age1}</div>
      <div>div age2 is : {age2}</div>
      <div class="d-grid gap-2">
        <button
          type="button"
          name=""
          id=""
          class="btn btn-primary"
          onClick={() => setage1(age1 + 1)}
        >
          Increment Age1
        </button>
        <button
          type="button"
          name=""
          id=""
          class="btn btn-primary"
          onClick={() => setage2(age2 + 1)}
        >
          Increment Age2
        </button>
      </div>
      <div className="p-5">
        <div>list Component</div>
        <div>{carColor}</div>
      </div>
    </>
  );
}

export default List;
