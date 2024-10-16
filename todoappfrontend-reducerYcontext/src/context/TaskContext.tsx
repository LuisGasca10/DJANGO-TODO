import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import {
  initialState,
  TaskActions,
  taskReducer,
  TaskState,
} from "../reducer/taskReducer";

type TaskContextProviderProps = PropsWithChildren;

type TaskContextProps = {
  state: TaskState;
  dispatch: Dispatch<TaskActions>;
};

export const TaskContext = createContext<TaskContextProps>(null!);

export const TaskProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
