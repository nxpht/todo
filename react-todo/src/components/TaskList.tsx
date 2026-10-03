import Task from "./Task";
import { type TaskType } from "../types/types";

interface TaskListProps {
  tasks: TaskType[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onSave: (id: string, text: string) => void;
}

export default function TaskList({
  tasks,
  onDelete,
  onComplete,
  onSave,
}: TaskListProps) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onDelete={onDelete}
          onComplete={onComplete}
          onSave={onSave}
        />
      ))}
    </ul>
  );
}
