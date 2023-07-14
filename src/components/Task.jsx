import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <button 
        type="checkbox"
        className={styles.check} 
      />
      <p className={styles.taskDescription}>Task to complete</p>
      <Trash className={styles.deleteIcon} size={20}/>
    </div>
  );
}
