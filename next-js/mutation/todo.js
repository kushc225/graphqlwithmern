import TodoModel from "@/model/todoModel";

export const addTodo = async (_, { newTodo }) => {
  try {
    const data = await TodoModel.create({ ...newTodo });
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};
export const removeTodo = async (_, { id }) => {
  try {
    const data = await TodoModel.findByIdAndDelete(id);
    if (!data) return false;
    return true;
  } catch (error) {
    return new Error(error.message);
  }
};
export const updateTodo = async (_, { updateTodo }) => {
  try {
    const { _id, ...rest } = updateTodo;
    const data = await TodoModel.findByIdAndUpdate(
      _id,
      { $set: { ...rest } },
      { new: true }
    );
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};
