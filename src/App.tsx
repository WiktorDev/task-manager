
import './App.css'
import {useEffect, useState} from "react";
import {Tasks} from "../types.ts";
import {TaskCard} from "./components/TaskCard.tsx";
import {Plus} from "react-bootstrap-icons";

function App() {
  const [tasks, setTasks] = useState<Tasks | null>(null)

  const fetchTasks = () => {
    fetch("http://localhost:3001/api/tasks")
      .then(response => response.json())
      .then((data) => setTasks(data));
  }
  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 bg-dark-subtle">
              <div className="card-body">
                <div className="row">
                  <h5 className="card-title text-start col-md-10">Upcoming</h5>
                  <i className="bi bi-three-dots col-md-2"></i>
                </div>
                {tasks != null && (
                  tasks.items.map((task) => (
                    <TaskCard task={task} tasks={tasks} />
                  ))
                )}
              </div>
              <div className="d-flex flex-row">
                <Plus/>
                <p>Add another card</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">1</div>
          <div className="col-md-4">1</div>
        </div>
      </div>
    </div>
  )
}

export default App
