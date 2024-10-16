import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorMessage } from "../ui/ErrorMessage";
import { Task } from "../../types";

interface Props {
  handleAddTask: (description: Task["description"]) => Promise<void>;
}

export const TaskForm = ({ handleAddTask }: Props) => {
  const [taskData, setTaskData] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTaskData(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskData.length === 0) return setError(true);
    handleAddTask(taskData);
    setTaskData("");
    setError(false);
  };

  return (
    <div className="bg-white rounded-lg p-5 min shadow-sm mt-12 min-w-96 md:w-[500px] mx-2">
      {error && <ErrorMessage message="La tarea no puede ir vacia" />}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="opacity-60 " htmlFor="task">
            Tarea
          </label>
          <input
            value={taskData}
            onChange={handleChange}
            className="border border-slate-500 p-3 rounded !outline-none"
            type="text"
            name="tarea"
            id="task"
            placeholder="Ingrese la tarea aquí"
          />
        </div>

        <input
          className="transition-colors bg-sky-300 w-full mt-10 uppercase 
            p-2 rounded font-semibold self-end hover:bg-sky-400 cursor-pointer"
          type="submit"
          value="Agregar"
        />
      </form>
    </div>
  );
};
