import { Task } from "../types";

export type TaskActions =
  | { type: "create-task"; payload: { newTask: Task } }
  | { type: "delete-task"; payload: { taskId: Task["id"] } };

export type TaskState = Task[];
export const initialState: TaskState = [];

export const taskReducer = (
  state: TaskState = initialState,
  action: TaskActions
) => {
  switch (action.type) {
    case "create-task":
      const newTaskList = [...state, action.payload.newTask];
      state = newTaskList;
      return state;
    case "delete-task":
      const updateList = state.filter(
        (task) => task.id !== action.payload.taskId
      );
      return (state = updateList);
    default:
      return state;
  }
};
