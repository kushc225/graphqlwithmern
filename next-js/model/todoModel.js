import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is must"],
    },
    description: {
      type: String,
      required: [true, "Description is must"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const TodoModel = mongoose.models.todo || mongoose.model("todo", schema);
export default TodoModel;
