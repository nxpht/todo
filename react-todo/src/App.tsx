import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { format } from "date-fns";

const tasksArr = [
  { completed: true, editing: false, description: "Completed task", date: format(new Date(), "dd.MM.yyyy") },
  { completed: false, editing: true, description: "Editing task", date: format(new Date(), "dd.MM.yyyy")  },
  { completed: true, editing: false, description: "Active task", date: format(new Date(), "dd.MM.yyyy")  },
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
