import { AddTask } from "./components/AddTask"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css";

function App() {

  return (
    <div>
      <Sidebar /> 

      <div>
        <AddTask />

      </div>
    </div>
   
  )
}

export default App
