import { useState } from 'react'
import { Plus } from 'phosphor-react';
import styles from './CreateTask.module.css'

export function CreateTask({setTaskListStateFunction}) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskText(){
    setNewTaskText(event.target.value);
  }

  function createNewTask(){
    event.preventDefault();
    setTaskListStateFunction(prevTaskList => [
      ...prevTaskList,
      {
        id: Date.now(),
        check: false,
        taskDescription: newTaskText
      }
    ])
    setNewTaskText('');
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      createNewTask();
    }
  }

  return (
    <div className={styles.createTask}>
      <input
        name="input"
        className={styles.inputNewTask}
        type='text'
        placeholder='Add a new task'
        onChange={handleNewTaskText}
        onKeyPress={handleKeyPress}
        value={newTaskText}
      >
      </input>

      <button 
        className={styles.buttonNewTask}
        type='submit'
        onClick={createNewTask}
      >
          Create <Plus />
      </button>
    </div>
  );
}
