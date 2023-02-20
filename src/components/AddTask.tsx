import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddTask.module.css";
import { TasksList } from "./TasksList";

export function AddTask() {
  const [tasks, setTasks] = useState([{    
    id: 0,
    content: 'Tarefa 1',
    done: false,
  }]);

  const [ newTaskContent, setNewTaskContent ] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: new Date().getTime(),
      content: newTaskContent,
      done: false,
    }])

    setNewTaskContent('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeleteOne = tasks.filter(task => task.id !== id);

    setTasks(tasksWithoutDeleteOne);
  }

  function markAsDone(id: number) {
    const tasksWithTaskMarkedDone = tasks.map((task) => {
      if(task.id === id){
        task.done = !task.done;
      } 

      return task;
    })

    console.log(tasksWithTaskMarkedDone);

    setTasks(tasksWithTaskMarkedDone);
  }
  
  return (
    <div>
      <form className={styles.addTaskDiv} onSubmit={handleCreateNewTask}>
        <input 
          value={newTaskContent}
          onChange={handleNewTaskChange}
          className={styles.addTaskInput} 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          />

        <button 
          className={styles.addTaskButton} 
          type="submit">
            Criar +
        </button>
      </form>
      
      <div>
          <TasksList tasks={tasks} deleteTask={deleteTask} markAsDone={markAsDone}/>
      </div>
    </div>
  )
}