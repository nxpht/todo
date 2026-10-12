import { type FilterType } from "../types/types";
interface TasksFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}
function TasksFilter({ filter, onFilterChange }: TasksFilterProps) {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === "all" ? "selected" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === "active" ? "selected" : ""}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === "completed" ? "selected" : ""}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}
export default TasksFilter;
