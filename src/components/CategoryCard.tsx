import {Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CategoryType, Tasks} from "../../types.ts";
import {TaskCard} from "./TaskCard.tsx";
import {AddTaskModal} from "./modals/AddTaskModal.tsx";

export function CategoryCard(props: { category: CategoryType, title: string, tasks: Tasks }) {
  return (
    <Col>
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          {props.tasks != null && (
            props.tasks.items.filter(it => it.category == props.category).map((task) => (
              <TaskCard task={task} tasks={props.tasks} />
            ))
          )}
        </Card.Body>
        <Card.Footer>
          <AddTaskModal/>
        </Card.Footer>
      </Card>
    </Col>
  )
}