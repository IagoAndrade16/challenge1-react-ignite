import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.check}/>
      <span className={styles.taskTitle}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <button className={styles.deleteButton}><Trash size={24} color={"red"}/></button>
    </div>
  )
}