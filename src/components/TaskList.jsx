import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList(){
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.progressInfo}>
          <p className={styles.tasksInfo}>Tasks created<span className={styles.counterNumbers}>5</span></p>
          <p className={styles.completedInfo}>Completed<span className={styles.counterNumbers}>2 de 5</span></p>
      </div>
      
      <div className={styles.taskList}>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    </div>
  )
}