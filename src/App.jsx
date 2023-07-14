import { useState } from 'react'

import styles from './App.module.css';

import { Header } from "./components/Header";
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';

// DESIGN:
// 1. Empty task list


// FUNCTIONALITY:
//--------// 1. Create a state of tasks. (Initial value = the static array)
//--------// 2. List the state of tasks.
//--------// 3. Create a new task, click the button and add the typed task to the state.
//--------// 4. Show the number of list.length of tasks
//--------// 6. Show the number of tasks completed (check = true) / total
//--------// 7. Mark a task, updating to complete, updating the progress of completed tasks also.
//--------// 8. Delete a task, updating the total of tasks.



export function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      check: true,
      taskDescription: "Create a weekly meal plan"
    },
    {
      id: 2,
      check: false,
      taskDescription: "Set goals and prioritize tasks for the day"
    },
    {
      id: 3,
      check: false,
      taskDescription: "Maintain a clean and organized workspace"
    },
    {
      id: 4,
      check: false,
      taskDescription: "Keep track of expenses and budgeting"
    },
    {
      id: 5,
      check: false,
      taskDescription: "Schedule regular exercise and self-care activities"
    },
    {
      id: 6,
      check: false,
      taskDescription: "Communicate effectively and promptly with colleagues and clients"
    },
    {
      id: 7,
      check: false,
      taskDescription: "Invest time in building and nurturing meaningful relationships"
    },
    {
      id: 8,
      check: false,
      taskDescription: "Continuously update and improve professional skills"
    },
    {
      id: 9,
      check: false,
      taskDescription: "Delegate tasks and responsibilities efficiently"
    },
    {
      id: 10,
      check: false,
      taskDescription: "Reflect on personal growth and set long-term goals"
    }  
  ]);

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <CreateTask
          taskListState={taskList} 
          setTaskListStateFunction={setTaskList}
        />
        
        <TaskList 
          taskListState={taskList} 
          setTaskListStateFunction={setTaskList} 
        />
      </div>
    </div>
  )
}