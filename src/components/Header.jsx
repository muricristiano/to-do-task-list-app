import styles from './Header.module.css'
import CheckBoxLogo from '../assets/checkbox-logo.svg'
import {} from 'phosphor-react'

export function Header(){
  return (
        <header>
            <img className={styles.checkboxLogo} src={CheckBoxLogo}/>
            <h1 className={styles.title}> TO DO TASKLIST </h1>
        </header>
  )
}
