export interface TaskProps {
  completed: boolean;
  editing: boolean;
  description: string;
  date: Date;
}

export default function Task(props: TaskProps) {
  function getClassName() {
    if (props.editing) {
      return "editing";
    } else if (props.completed) {
      return "completed";
    } else {
      return "";
    }
  }
  return (
    <>
      <li className={getClassName()}>
        <div className="view">
          <input className="toggle" type="checkbox"></input>
          <label>
            <span className="description">{props.description}</span>
            <span className="created">{props.date.toString()}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {props.editing && (
          <input type="text" className="edit" value={props.description} />
        )}
      </li>
    </>
  );
}
