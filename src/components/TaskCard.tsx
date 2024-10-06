import {Task, Tasks} from "../../types.ts";

export function TaskCard(props: { task: Task, tasks: Tasks }) {
  return (
    <div>
      <div className="card">
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
    </div>
  )
}