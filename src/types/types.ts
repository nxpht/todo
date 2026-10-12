interface TaskType {
  id: string;
  completed: boolean;
  description: string;
  date: Date;
}
type FilterType = "all" | "active" | "completed";

export { type TaskType, type FilterType };
