import Task, { type TaskProps } from "./Task";

export interface TaskListProps {
  tasks: TaskProps[];
}
export default function TaskList(props: TaskListProps) {
  return (
    <ul className="todo-list">
      {props.tasks.map((task, index) => (
        <Task
          key={index}
          description={task.description}
          completed={task.completed}
          editing={task.editing}
          date={task.date}
        />
      ))}
    </ul>
  );
}
