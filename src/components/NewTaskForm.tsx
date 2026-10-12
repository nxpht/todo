import { useState } from "react";
interface NewTaskFormProps {
  onAdd: (text: string) => void;
}
function NewTaskForm({ onAdd }: NewTaskFormProps) {
  const [text, setText] = useState<string>("");
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onAdd(text);
          setText("");
        }
      }}
      onChange={(e) => setText(e.target.value)}
      value={text}
    ></input>
  );
}

export default NewTaskForm;
