import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTask, deleteTask, getAllTask } from "../api";
import { toast } from "react-toastify";

export const useTask = () => {
  const queryClient = useQueryClient();
  const taskQuery = useQuery({
    queryFn: getAllTask,
    queryKey: ["taskList"],
    staleTime: 1000 * 60 * 60,
  });

  const addTaskMutate = useMutation({
    mutationFn: addTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["taskList"] });
      toast.success(data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const deleteTaskMutate = useMutation({
    mutationFn: deleteTask,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["taskList"] });
      toast.success(data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    taskQuery,
    addTaskMutate,
    deleteTaskMutate,
  };
};
