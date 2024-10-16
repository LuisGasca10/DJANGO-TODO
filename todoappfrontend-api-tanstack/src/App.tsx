import { TaskForm, TaskList } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTask } from "./hooks/useTask";

function App() {
  const { taskQuery } = useTask();
  if (taskQuery.data)
    return (
      <>
        <h1 className="text-4xl text-center uppercase font-bold mt-14 md:text-6xl">
          Todo app
        </h1>

        <TaskForm />

        <main>
          {taskQuery.data.length === 0 ? (
            <p className="text-center mt-20 font-bold text-xl">
              Aun no hay tareas, agregue una para empezar.
            </p>
          ) : (
            <TaskList />
          )}
        </main>
        <ToastContainer />
      </>
    );
}

export default App;
