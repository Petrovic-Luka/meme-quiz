import React from "react";
import styles from "./QuestionFourAnswer.module.css";
import crveni from "../../img/crveni.png";
import zeleni from "../../img/zeleni.png";
import { useState, useEffect } from "react";
import { fetchData } from "../../functions";

const QuestionFourAnswer = () => {
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [points1, setPoints1] = useState("");
  const [points2, setPoints2] = useState("");
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        await loadQuestion();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData2();
  }, []);

  async function loadQuestion() {
    const postsData = await fetchData(
      "https://8lx30fwb-7052.euw.devtunnels.ms/getNextQuestion?id=" +
        localStorage.getItem("id") +
        "&username=" +
        localStorage.getItem("username")
    );
    console.log(postsData);
    setOptions(postsData.options.split("|"));
    setQuestion(postsData.text);
    setPlayer1(postsData.player1);
    setPlayer2(postsData.player2);
    setPoints1(postsData.pointsP1);
    setPoints2(postsData.pointsP2);
  }

  async function sendCreate(answer) {
    try {
      var temp = {
        id: localStorage.getItem("id"),
        username: localStorage.getItem("username"),
        answer: answer,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp),
      };
      const response = await fetch(
        "https://8lx30fwb-7052.euw.devtunnels.ms/answerQuestion",
        requestOptions
      );
      let answ = await response.text();
      alert(answ);
      console.log(answ);
      await getReady();
    } catch (err) {}
  }

  async function getReady() {
    let i = 0;
    let stop = "";
    let interval = setInterval(async () => {
      if (i < 20 && stop != "true") {
        stop = await getData();
        if (stop == true) {
          await loadQuestion();
          window.location.reload();
        }
        console.log(stop);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 5000);
  }

  async function getData() {
    let temp = await fetch(
      "https://8lx30fwb-7052.euw.devtunnels.ms/getReadyNext?id=" +
        localStorage.getItem("id")
    );
    let isReady = await temp.text();
    return isReady;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.takmicari}>
        <div className={styles.takmicar}>
          <img src={crveni}></img>
          <p>{player1 + ":" + points1}</p>
        </div>
        <div className={styles.takmicar}>
          <p>{player2 + ":" + points2}</p>
          <img src={zeleni}></img>
        </div>
      </div>
      <div className={styles.question}>
        <p>{question}</p>
        <div className={styles.wrapper2}>
          {options.map((text, index) => (
            <div>
              <button key={index} onClick={() => sendCreate(text)}>
                {text}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles.twoAns}>
        <button className={styles.answer}></button>
        <button className={styles.answer}></button>
      </div>
      <div className={styles.twoAns}>
        <button className={styles.answer}></button>
        <button className={styles.answer}></button>
      </div> */}
    </div>
  );
};

export default QuestionFourAnswer;
