import {useEffect, useState} from "react";
import {CategoryType, Tasks} from "../types.ts";
import {Container, Row} from "react-bootstrap";
import {CategoryCard} from "./components/CategoryCard.tsx";

export default function App() {
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
    <Container>
      <Row>
        <CategoryCard category={CategoryType.UPCOMING} title="Do zrobienia" tasks={tasks}/>
        <CategoryCard category={CategoryType.IN_PROGRESS} title="W trakcie" tasks={tasks}/>
        <CategoryCard category={CategoryType.DONE} title="Skończone" tasks={tasks}/>
      </Row>
    </Container>
  );
}
