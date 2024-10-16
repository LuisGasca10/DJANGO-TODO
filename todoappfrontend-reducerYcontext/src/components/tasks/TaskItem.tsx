import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../types";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: Task;
  i: number;
}

export const TaskItem = ({ task, i }: Props) => {
  const { state, dispatch } = useContext(TaskContext);

  const handleDelete = (id: Task["id"]) => {
    dispatch({ type: "delete-task", payload: { taskId: id } });
  };

  return (
    <div
      className={`py-5 flex justify-between px-3 ${
        i === state.length - 1 ? "border-y-2" : "border-t-2"
      }`}
    >
      <p className="">{task.name}</p>

      <button type="button" onClick={() => handleDelete(task.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};
