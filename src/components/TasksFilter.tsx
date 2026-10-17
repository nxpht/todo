import { type FilterType } from "../types/types";

interface TasksFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "completed",
    label: "Completed",
  },
];

function TasksFilter({ filter, onFilterChange }: TasksFilterProps) {
  return (
    <ul className="filters">
      {FILTERS.map(({ value, label }) => (
        <li>
          <button
            className={filter === value ? "selected" : ""}
            onClick={() => onFilterChange(value)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TasksFilter;
