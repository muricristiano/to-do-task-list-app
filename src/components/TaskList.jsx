import { Task } from './Task'
import { EmptyList } from './EmptyList'
import styles from './TaskList.module.css'

export function TaskList({taskListState, setTaskListStateFunction}){
  const numberOfCompletedTasks = taskListState.filter(task => task.check === true)

  function deleteTask(taskToBeDeleted) {
    const taskListWithoutTheDeletedOne = taskListState.filter(task => task.id !== taskToBeDeleted)
    setTaskListStateFunction(taskListWithoutTheDeletedOne)
  }

  function checkTask(idFromTaskToBeChecked){
    const updatedTaskList = taskListState.map(task => {
      if (task.id === idFromTaskToBeChecked) {
        return {
          ...task,
          check: !task.check
        };
      }
      return task;
    });
    setTaskListStateFunction(updatedTaskList);
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.progressInfo}>
          <p className={styles.tasksInfo}>Tasks created<span className={styles.counterNumbers}>{taskListState.length}</span></p>
          <p className={styles.completedInfo}>
              Completed
                <span className={styles.counterNumbers}>
                    {numberOfCompletedTasks.length} of {taskListState.length}
                </span>
          </p>
      </div>
      
      <div className={styles.taskList}>
          {
            
            taskListState.length > 0 
            
            ?

            taskListState.map(task => {
              return (
                <Task
                  key={task.id} 
                  check={task.check} 
                  taskDescription={task.taskDescription} 
                  deleteTaskFunction={() => deleteTask(task.id)}
                  updateTaskFunction={() => checkTask(task.id)}
                />
            )})
          
            : 
            
            <EmptyList />
          }
      </div>
    </div>
  )
}