import React from "react";
import styles from "./WaitingPage.module.css";
import { MoonLoader } from "react-spinners";
import { fetchData } from "../../functions";
import { useState, useEffect } from "react";

const WaitingPage = () => {
  const [ready, setReady] = useState("");

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        getReady();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData2();
  }, []);

  async function getReady() {
    let i = 0;
    let stop = "";
    let interval = setInterval(async () => {
      if (i < 20 && stop != "true") {
        stop = await getData();
        // stop.then(async () => {
        //   console.log(await stop);
        // });
        console.log(stop);
        if (stop == "true") {
          window.location.href = "/#/Question";
        }
        i++;
      } else {
        clearInterval(interval);
      }
    }, 5000);
  }

  async function getData() {
    let temp = await fetch(
      "https://8lx30fwb-7052.euw.devtunnels.ms/getReady?id=" +
        localStorage.getItem("id")
    );
    let isReady = await temp.text();
    setReady(isReady);
    return isReady;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toptwo}>
        <div className={styles.text}>KOD SOBE</div>
        <div className={styles.kod}>{localStorage.getItem("id")}</div>
      </div>

      <div className={styles.cekanje}>CEKANJE IGRACA</div>
      <p>{ready}</p>
      <MoonLoader
        color="yellow"
        height={300}
        width={300}
        loading={true}
        className={styles.loader}
      />
    </div>
  );
};

export default WaitingPage;
