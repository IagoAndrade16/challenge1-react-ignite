import { Task } from "./Task";
import styles from "./TasksList.module.css";

export interface ITask {
  id: number;
  content: string;
  done: boolean;
  onDeleteTask?: (id: number) => void;
  onMarkAsDone?: (id: number) => void;
}

interface ITaskProps {
  tasks: ITask[];
  deleteTask: (id: number) => void;
  markAsDone: (id: number) => void;
}

export function TasksList({ tasks, deleteTask, markAsDone }: ITaskProps) {

  let tasksDone = tasks.filter((task) => {
    if(task.done) return task;
  })

  if(tasks.length == 0) {
    return (
      <div className={styles.tasks}>
        <div className={styles.info}>
  
          <div className={styles.created}>
            <span>Tarefas criadas</span>
            <div>{tasks.length}</div>
          </div>
  
          <div className={styles.done}>
            <span>Concluídas</span>
            <div>{tasksDone.length}</div>
          </div>
  
        </div>
        <div className={styles.list}>  
          <div className={styles.empty} id="emptyTasks">
            <img src="../../assets/Clipboard.png" alt="Sem tarefas" />
            <p>
              Você ainda não tem tarefas cadastradas
              Crie tarefas e organize seus itens a fazer.
            </p>
          </div> 
        </div>
      </div>
    )
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>

        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <div>{tasks.length}</div>
        </div>

        <div className={styles.done}>
          <span>Concluídas</span>
          <div>{tasksDone.length}</div>
        </div>

      </div>
      <div className={styles.list}>
        {tasks.map(task => {
          return (
            <Task content={task.content} done={task.done} id={task.id} onDeleteTask={deleteTask} onMarkAsDone={markAsDone}/> 
          )
        })}
      </div>
    </div>
  )
}