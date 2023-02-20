import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddTask.module.css";
import { TasksList } from "./TasksList";

export function AddTask() {
  const [tasks, setTasks] = useState([{    
    id: 0,
    content: '',
    done: false,
  }]);

  const [ newTaskContent, setNewTaskContent ] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {
      id: tasks.length + 1,
      content: newTaskContent,
      done: false,
    }])

    setNewTaskContent('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
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
          <TasksList tasks={tasks}/>
      </div>
    </div>
  )
}