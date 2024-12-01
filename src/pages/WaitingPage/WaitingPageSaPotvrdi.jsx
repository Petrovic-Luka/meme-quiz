import React, { useState } from "react";
import styles from "./WaitingPage.module.css";
import { MoonLoader } from "react-spinners";

const WaitingPage = () => {
  const [sessionId, setSessionId] = useState(0);

  async function sendJoin() {
    try {
      localStorage.setItem("id", sessionId);
      var temp = {
        Id: sessionId,
        username: localStorage.getItem("username"),
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp),
      };
      const response = await fetch(
        "https://8lx30fwb-7052.euw.devtunnels.ms/join",
        requestOptions
      );
      console.log(await response);
      window.location.href = "/#/Question";
    } catch (err) {}
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toptwo}>
        <div className={styles.text}>KOD SOBE</div>
        <input
          className={styles.kod}
          onChange={(e) => {
            setSessionId(e.target.value);
          }}
        ></input>
      </div>

      <button className={styles.cekanje} onClick={sendJoin}>
        POTVRDI
      </button>
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
