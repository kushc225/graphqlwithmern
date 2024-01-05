import { addTodo, removeTodo, updateTodo } from "@/mutation/todo";
export const mutationResolver = {
  Mutation: {
    addTodo: addTodo,
    removeTodo: removeTodo,
    updateTodo: updateTodo,
  },
};
