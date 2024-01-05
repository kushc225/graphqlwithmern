import { getAllTodo } from "@/queries/todo";
export const queryResolver = {
  Query: {
    getAllTodo: getAllTodo,
  },
};
