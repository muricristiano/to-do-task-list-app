import { Header } from "./components/Header";
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <CreateTask/>
        <TaskList/>
      </div>
    </div>
  )
}