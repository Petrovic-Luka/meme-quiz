import React from 'react'
import styles from "./QuestionFourAnswer.module.css"
import crveni from '../../img/crveni.png'
import zeleni from '../../img/zeleni.png'

const QuestionFourAnswer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.takmicari}>
            <div className={styles.takmicar}>
                <img src={crveni}></img>
                <p>Igrac1</p>
            </div>
            <div className={styles.takmicar}>
                <p>Igrac2</p>
                <img src={zeleni}></img>
            </div>
        </div>
        <div className={styles.question}>

        </div>
        <div className={styles.twoAns}>
            <button className={styles.answer}></button>
            <button className={styles.answer}></button>
        </div>
        <div className={styles.twoAns}>
            <button className={styles.answer}></button>
            <button className={styles.answer}></button>
        </div>
    </div>
  )
}

export default QuestionFourAnswer