import { useTask } from "../../hooks/useTask";
import { Task } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: Task;
  i: number;
  length: number;
}

export const TaskItem = ({ task, i, length }: Props) => {
  const { deleteTaskMutate } = useTask();

  return (
    <div
      className={`py-5 flex justify-between px-3 ${
        i === length - 1 ? "border-y-2" : "border-t-2"
      }`}
    >
      <p className="">{task.description}</p>

      <button type="button" onClick={() => deleteTaskMutate.mutate(task.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};
