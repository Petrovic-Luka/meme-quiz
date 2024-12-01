import React from 'react'
import styles from './QuestionInputAnswer.module.css'
import crveni from '../../img/crveni.png'
import zeleni from '../../img/zeleni.png'

const QuestionInputAnswer = () => {
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
        <div className={styles.question} />
        <div className={styles.answer}>
            <p>Moj odgovor: </p>
            <textarea></textarea>
        </div>
        <button className={styles.confirm}>Potvrdi</button>
    </div>
  )
}

export default QuestionInputAnswer