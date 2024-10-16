import { Task } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: Task;
  i: number;
  length: number;
  handleDelete: (id: Task["id"]) => Promise<void>;
}

export const TaskItem = ({ task, i, length, handleDelete }: Props) => {
  return (
    <div
      className={`py-5 flex justify-between px-3 ${
        i === length - 1 ? "border-y-2" : "border-t-2"
      }`}
    >
      <p className="">{task.description}</p>

      <button type="button" onClick={() => handleDelete(task.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};
