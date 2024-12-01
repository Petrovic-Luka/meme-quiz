import React from 'react'
import styles from './WaitingPage.module.css'
import { MoonLoader } from 'react-spinners'

const WaitingPage = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.toptwo}>
            <div className={styles.text}>KOD SOBE</div>
            <div className={styles.kod}></div>
        </div>
        
        <div className={styles.cekanje}>CEKANJE IGRACA</div>
        <MoonLoader color="yellow" height= {300} width={300} loading={true} className={styles.loader}/>
    </div>
  )
}

export default WaitingPage