import { Task } from "./Task";
import styles from "./TasksList.module.css";

export interface ITask {
  id: number;
  content: string;
  done: boolean;
}

interface ITaskProps {
  tasks: ITask[];
}

export function TasksList({ tasks }: ITaskProps) {

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>

        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <div>0</div>
        </div>

        <div className={styles.done}>
          <span>Concluídas</span>
          <div>0</div>
        </div>

      </div>
      <div className={styles.list}>
        {tasks.map(task => {
          return (
            <Task /> 
          )
        })}

        {/* <div className={styles.empty} id="emptyTasks">
          <img src="../../assets/Clipboard.png" alt="Sem tarefas" />
          <p>
            Você ainda não tem tarefas cadastradas
            Crie tarefas e organize seus itens a fazer.
          </p>
        </div> */}
      </div>
    </div>
  )
}