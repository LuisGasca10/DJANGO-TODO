import { Task } from "../../types";
import { TaskItem } from "./TaskItem";

interface Props {
  taskList: Task[];
  handleDelete: (id: Task["id"]) => Promise<void>;
}

export const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <section className="mt-12">
      <h2 className="text-center mb-3 text-2xl font-semibold">
        Lista de Tareas
      </h2>
      <div
        className="bg-white rounded-lg mx-2  p-3 shadow-sm min-h-72
       max-h-72 md:min-h-96 md:max-h-96 overflow-y-auto"
      >
        {taskList.map((task, i) => (
          <TaskItem
            key={task.id}
            i={i}
            length={taskList.length}
            task={task}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};
