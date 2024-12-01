import React from 'react'
import styles from './EndPage.module.css'

const EndPage = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.ikonica}></div>
        <div className={styles.tekst}></div>
        <div className={styles.scoreboard}></div>
        <div className={styles.buttons}>
            <div id={styles.rematch}></div>
            <div id={styles.over}></div>
        </div>
    </div>
  )
}

export default EndPage