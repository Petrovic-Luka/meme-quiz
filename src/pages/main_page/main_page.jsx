import React from 'react'
import styles from './main_page.module.css';
import userIcon from '../../img/user.png'

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
        <img src={userIcon} className={userIcon}></img>
        <div className={styles.username}>
            <p>Korisnicko ime</p>
        </div>
        <input className={styles.insertUsername} />
        <div className={styles.buttons}>
            <button>
                NAPRAVI SOBU
            </button>
            <button>
                Prikljuci se sobi
            </button>
        </div>
    </div>
  )
}

export default MainPage