import { useTask } from "../../hooks/useTask";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { taskQuery } = useTask();

  if (taskQuery.data)
    return (
      <section className="mt-12">
        <h2 className="text-center mb-3 text-2xl font-semibold">
          Lista de Tareas
        </h2>
        <div
          className="bg-white rounded-lg mx-2  p-3 shadow-sm min-h-72
       max-h-72 md:min-h-96 md:max-h-96 overflow-y-auto"
        >
          {taskQuery.data.map((task, i) => (
            <TaskItem
              key={task.id}
              i={i}
              length={taskQuery.data!.length}
              task={task}
            />
          ))}
        </div>
      </section>
    );
};
