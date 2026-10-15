import "./App.css";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";

import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { type TaskType, type FilterType } from "./types/types";
import { useState } from "react";
import tasksData from "./data/tasksData.json";
const tasksArr: TaskType[] = tasksData.slice(0, 10).map((task) => {
  return {
    id: String(task.id),
    description: task.title,
    completed: task.completed,
    date: new Date(),
  };
});

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(tasksArr);
  const [tasksFilter, setTasksFilter] = useState<FilterType>("all");
  const visibleTasks = tasks.filter((task) => {
    if (tasksFilter === "active") return !task.completed;
    if (tasksFilter === "completed") return task.completed;
    return true;
  });
  const unfinishedTasksCounter = tasks.filter((task) => !task.completed).length;
  function updateTask(id: string, changes: Partial<TaskType>) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...changes } : task)),
    );
  }
  function removeTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  function toggleComplete(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function saveTask(id: string, text: string) {
    updateTask(id, { description: text });
  }
  function addTask(text: string) {
    const newTask = {
      id: crypto.randomUUID(),
      completed: false,
      description: text,
      date: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  }
  function clearTasks() {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }

  return (
    <section className="todoapp">
      <Header />
      <NewTaskForm onAdd={addTask} />
      <TaskList
        tasks={visibleTasks}
        onDelete={removeTask}
        onComplete={toggleComplete}
        onSave={saveTask}
      />
      <Footer
        onClear={clearTasks}
        tasksCount={unfinishedTasksCounter}
        filter={tasksFilter}
        onFilterChange={setTasksFilter}
      />
    </section>
  );
}

export default App;
