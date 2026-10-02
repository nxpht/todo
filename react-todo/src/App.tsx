import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
const tasksArr = [
  { completed: true, editing: false, description: "Completed task", date: new Date() },
  { completed: false, editing: true, description: "Editing task", date: new Date() },
  { completed: true, editing: false, description: "Active task", date: new Date() },
];
function App() {
  return (
    <section className="todoapp">
      <Header />
      <TaskList tasks={tasksArr} />
      <Footer />
    </section>
  );
}

export default App;
