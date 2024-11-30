import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, React } from "react";
import { fetchData } from "./functions";

function App() {
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const postsData = await fetchData(
          "https://8lx30fwb-7052.euw.devtunnels.ms/Test"
        );
        console.log(postsData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData2();
  }, []);

  return <div className="App"></div>;
}

export default App;
