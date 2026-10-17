import { type TaskType } from "../types/types";
import { formatDistanceToNow } from "date-fns";

import { useState } from "react";
interface TaskProps {
  task: TaskType;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onSave: (id: string, text: string) => void;
}

export default function Task({
  task,
  onDelete,
  onComplete,
  onSave,
}: TaskProps) {
  const [draft, setDraft] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);
  const className = isEditing ? "editing" : task.completed ? "completed" : "";
  function submit() {
    const text = draft.trim();
    if (text) {
      onSave(task.id, text);
    }
  }
  return (
    <li className={className}>
      <div className="view">
        <input
          id={task.id}
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        ></input>
        <label htmlFor={task.id}>
          <span className="description">{task.description}</span>
          <span className="created">
            {formatDistanceToNow(task.date, { addSuffix: true })}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            setDraft(task.description);
            setIsEditing(true);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        ></button>
      </div>
      {isEditing && (
        <input
          type="text"
          className="edit"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            submit();
            setIsEditing(false);
          }}
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
