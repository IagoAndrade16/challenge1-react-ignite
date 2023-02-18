import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src="../../assets/todo_logo.svg" className={styles.todoLogo} />
    </aside>
  )
}