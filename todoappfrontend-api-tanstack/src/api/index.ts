import { isAxiosError } from "axios";
import { api } from "../config/axios";
import { Task } from "../types";

export const getAllTask = async () => {
  try {
    const { data } = await api.get<Task[]>("/tareas/");

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const addTask = async (description: string) => {
  try {
    await api.post("/tareas/", { description });
    return "Se agrego la tarea correctamente";
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const deleteTask = async (id: Task["id"]) => {
  try {
    await api.delete(`/tareas/${id}`);
    return "Se elimino correctamente la tarea";
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};
