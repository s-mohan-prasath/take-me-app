import mongoose, { mongo } from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  user: {
    ref: "users",
    type: mongoose.Types.ObjectId,
  },
  notes: [{ ref: "notes", type: mongoose.Types.ObjectId }],
});

export const CategoryModel = mongoose.model("categorys",CategorySchema);