import { useState } from "react";
import { TaskForm, TaskList } from "./components";
import { Task } from "./types";

function App() {
  const [taskList, settaskList] = useState<Task[]>([]);

  const handleAddTask = (task: Task) => {
    settaskList([...taskList, task]);
  };

  const handleDelete = (id: string) => {
    const filterList = taskList.filter((task) => task.id !== id);
    settaskList(filterList);
  };

  return (
    <>
      <h1 className="text-4xl text-center uppercase font-bold mt-14 md:text-6xl">
        Todo app
      </h1>

      <TaskForm handleAddTask={handleAddTask} />

      <main>
        {taskList.length === 0 ? (
          <p className="text-center mt-20 font-bold text-xl">
            Aun no hay tareas, agregue una para empezar.
          </p>
        ) : (
          <TaskList taskList={taskList} handleDelete={handleDelete} />
        )}
      </main>
    </>
  );
}

export default App;
