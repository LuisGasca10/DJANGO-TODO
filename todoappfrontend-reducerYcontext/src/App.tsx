import { useContext } from "react";
import { TaskForm, TaskList } from "./components";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { state } = useContext(TaskContext);

  return (
    <>
      <h1 className="text-4xl text-center uppercase font-bold mt-14 md:text-6xl">
        Todo app
      </h1>

      <TaskForm />

      <main>
        {state.length === 0 ? (
          <p className="text-center mt-20 font-bold text-xl">
            Aun no hay tareas, agregue una para empezar.
          </p>
        ) : (
          <TaskList />
        )}
      </main>
    </>
  );
}

export default App;
