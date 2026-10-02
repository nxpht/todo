import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
const tasksArr = [
  { completed: false, editing: false, description: "clean", date: new Date() },
  { completed: false, editing: true, description: "cook", date: new Date() },
  { completed: true, editing: false, description: "groceries", date: new Date() },
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
