import TodoModel from "@/model/todoModel.js";

export const getAllTodo = async () => {
  try {
    const data = await TodoModel.find();
    console.log({ data });
    if (!data) return null;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTodo = async (id) => {
  try {
    if (!id) return new Error("Id is required");
    const data = (await TodoModel.findOne({ _id: id })) || "";
    if (!data) return new Error("No data is found");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
