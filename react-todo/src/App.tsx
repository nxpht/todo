import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { type TaskType } from "./types/types";
import { useState } from "react";

const tasksArr: TaskType[] = [
  {
    id: crypto.randomUUID(),
    completed: true,
    description: "Completed task",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    completed: false,
    description: "Editing task",
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    completed: false,
    description: "Active task",
    date: new Date(),
  },
];

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(tasksArr);

  function updateTask(id: string, changes: Partial<TaskType>) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...changes } : task)),
    );
  }
  function removeTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  function toggleComplete(id: string) {
    const task = tasks.find((task) => task.id === id);
    if (task) updateTask(id, { completed: !task.completed });
  }

  function saveTask(id: string, text: string) {
    updateTask(id, { description: text });
  }

  return (
    <section className="todoapp">
      <Header />
      <TaskList
        tasks={tasks}
        onDelete={removeTask}
        onComplete={toggleComplete}
        onSave={saveTask}
      />
      <Footer />
    </section>
  );
}

export default App;
