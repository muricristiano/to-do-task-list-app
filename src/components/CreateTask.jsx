import { Plus } from 'phosphor-react';
import styles from './CreateTask.module.css'

export function CreateTask() {
  return (
    <div className={styles.createTask}>
      <input 
        className={styles.inputNewTask}
        type='text'
        placeholder='Add a new task'
        >
        </input>

      <button 
        className={styles.buttonNewTask}
        type='submit'>
          Create <Plus />
      </button>
    </div>
  );
}
