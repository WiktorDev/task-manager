import {Task, Tasks} from "../../types.ts";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {ViewTaskModal} from "./modals/ViewTaskModal.tsx";

export function TaskCard(props: { task: Task, tasks: Tasks }) {
  return (
    <>
      <ViewTaskModal/>
      <div className="card" onClick={handleShow}>
        <div className="card-body border-bottom">
          {props.task.tags.map((tag) => (
            <span className={"text-white rounded-1 ps-1 pe-1 text-start"} style={{
              backgroundColor: props.tasks.tags[tag]
            }}>
              {tag}
            </span>
          ))}
          <p className="card-text">{props.task.title}</p>
        </div>
      </div>
    </>
  )
}