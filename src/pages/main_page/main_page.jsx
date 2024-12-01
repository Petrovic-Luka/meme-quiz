import styles from "./main_page.module.css";
import userIcon from "../../img/user.png";
import { fetchData } from "../../functions";
import { useState, useEffect, React } from "react";

const MainPage = () => {
  const [username, setUsername] = useState("");
  const [sessionId, setSessionId] = useState(0);

  async function create() {
    let id = await sendCreate();
    window.location.href = "/#/Waiting";
    // await getReady(id);
  }

  async function join() {
    localStorage.setItem("username", username);
    window.location.href = "/#/WaitingConfirm";
    // sendJoin();
    // getReady(sessionId);
  }

  async function sendCreate() {
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
        "https://8lx30fwb-7052.euw.devtunnels.ms/create",
        requestOptions
      );
      let answ = await response.text();
      localStorage.setItem("id", answ);
      localStorage.setItem("username", username);
      console.log(answ);
      return answ;
    } catch (err) {}
  }

  return (
    <div className={styles.wrapper}>
      <img src={userIcon} className={userIcon}></img>
      <div className={styles.username}>
        <p>Korisnicko ime</p>
      </div>
      <input
        type="text"
        className={styles.insertUsername}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <button onClick={create}>NAPRAVI SOBU</button>
        <button onClick={join}>Prikljuci se sobi</button>
      </div>
    </div>
  );
};

export default MainPage;
