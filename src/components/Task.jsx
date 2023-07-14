import { Trash, Check } from 'phosphor-react';
import styles from './Task.module.css'

export function Task({check, taskDescription, deleteTaskFunction, updateTaskFunction}) {
  return (
    <div className={styles.task}>
      <button 
        type="checkbox"
        className={check ? styles.doneTask : styles.notDoneTask} 
        onClick={updateTaskFunction}
      >
        {check ? (<Check className={styles.checkIcon}/>) : ''}
      </button>
      <p className={check ? styles.taskDescriptionDone : styles.taskDescription}>{taskDescription}</p>
      <Trash 
        className={styles.deleteIcon} 
        size={20}
        onClick={deleteTaskFunction}
      />
    </div>
  );
}
