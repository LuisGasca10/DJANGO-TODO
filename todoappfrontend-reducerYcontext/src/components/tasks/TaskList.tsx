import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { state } = useContext(TaskContext);

  return (
    <section className="mt-12">
      <h2 className="text-center mb-3 text-2xl font-semibold">
        Lista de Tareas
      </h2>
      <div
        className="bg-white rounded-lg mx-2  p-3 shadow-sm min-h-72
       max-h-72 md:min-h-96 md:max-h-96 overflow-y-auto"
      >
        {state.map((task, i) => (
          <TaskItem key={task.id} i={i} task={task} />
        ))}
      </div>
    </section>
  );
};
