import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, React } from "react";
import { fetchData } from "./functions";

function App() {
  const [username, setUsername] = useState("");
  // useEffect(() => {
  //   const fetchData2 = async () => {
  //     try {
  //       const postsData = await fetchData(
  //         "https://8lx30fwb-7052.euw.devtunnels.ms/Test"
  //       );
  //       console.log(postsData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData2();
  // }, []);

  async function getReady() {
    let i = 0;
    let interval = setInterval(() => {
      if (i < 11) {
        let result = getData();
        i++;
      } else {
        clearInterval(interval);
      }
    }, 5000);
  }

  async function getData() {
    let temp = await fetchData("https://8lx30fwb-7052.euw.devtunnels.ms/Test");
    console.log(await temp);
  }

  async function wrapper() {
    await sendPost();
    await getReady();
  }

  async function sendPost() {
    try {
      var temp = {
        username: username,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp),
      };
      const response = await fetch(
        "https://8lx30fwb-7052.euw.devtunnels.ms/Test",
        requestOptions
      );
      console.log(await response);
    } catch (err) {}
  }

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        value="Search employees"
        type="button"
        id="Create"
        onClick={(e) => {
          wrapper();
        }}
      ></input>
    </div>
  );
}

export default App;
