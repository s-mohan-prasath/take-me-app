import mongoose from "mongoose";

export default async () => {
  mongoose.set("strictQuery", true); // this will ensure that new property will not be added that is not defined in the schema
  return mongoose.connect(process.env.MONGO_URI);
};
