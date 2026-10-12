import TasksFilter from "./TasksFilter";
import { type FilterType } from "../types/types";
interface FooterProps {
  onClear: () => void;
  tasksCount: number;
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
function Footer({ onClear, tasksCount, filter, onFilterChange }: FooterProps) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
