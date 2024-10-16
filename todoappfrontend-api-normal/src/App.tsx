import { useEffect, useState } from "react";
import { TaskForm, TaskList } from "./components";
import { Task } from "./types";
import { addTask, deleteTask, getAllTask } from "./api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [taskList, settaskList] = useState<Task[]>([]);
  const fetch = async () => {
    const data = await getAllTask();
    console.log({ data });
    settaskList(data!);
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleAddTask = async (description: Task["description"]) => {
    const data = await addTask(description);
    toast.success(data);
    await fetch();
  };

  const handleDelete = async (id: Task["id"]) => {
    const data = await deleteTask(id);
    toast.success(data);
    await fetch();
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
      <ToastContainer />
    </>
  );
}

export default App;
