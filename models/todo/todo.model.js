import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  { timestamps: true },
  {
    content: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
