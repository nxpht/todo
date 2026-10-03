import { type TaskType } from "../types/types";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
interface TaskProps extends TaskType {
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onSave: (id: string, text: string) => void;
}

export default function Task(props: TaskProps) {
  const [draft, setDraft] = useState(props.description);
  const [isEditing, setIsEditing] = useState(false);
  const className = isEditing ? "editing" : props.completed ? "completed" : "";
  function submit() {
    const text = draft.trim();
    if (!text) {
      props.onDelete(props.id);
    } else {
      props.onSave(props.id, text);
    }
  }
  return (
    <li className={className}>
      <div className="view">
        <input
          id={props.id}
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={() => props.onComplete(props.id)}
        ></input>
        <label htmlFor={props.id}>
          <span className="description">{props.description}</span>
          <span className="created">{formatDistanceToNow(props.date)}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setDraft(props.description);
            setIsEditing(true);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => props.onDelete(props.id)}
        ></button>
      </div>
      {isEditing && (
        <input
          type="text"
          className="edit"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={submit}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submit();
              setIsEditing(false);
            }
            if (e.key === "Escape") {
              setIsEditing(false);
            }
          }}
        />
      )}
    </li>
  );
}
