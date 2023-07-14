import styles from './Header.module.css'
import CheckListLogo from '../assets/list-checks.svg'

export function Header(){
  return (
        <header>
            <img className={styles.checkListLogo} src={CheckListLogo}/>
            <h1 className={styles.title}> 
              <span className={styles.to}>TO</span>
              <span className={styles.do}>DO</span>
              <span className={styles.list}>LIST</span>
            </h1>
        </header>
  )
}
