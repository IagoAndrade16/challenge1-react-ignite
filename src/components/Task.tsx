import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { ITask } from "./TasksList";

export function Task({ content, id, done, onDeleteTask, onMarkAsDone}: ITask) {
  function handleDeleteComment() {
    onDeleteTask!(id);
  }

  function handleMarkAsDone() {
    onMarkAsDone!(id);
  }

  return (
    <div className={styles.task}>
      <input checked={done} type="checkbox" className={styles.check} onChange={handleMarkAsDone} />
      <span className={styles.taskTitle}>{content}</span>
      <button className={styles.deleteButton} onClick={handleDeleteComment}><Trash size={24} color={"red"}/></button>
    </div>
  )
}