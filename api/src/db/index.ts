import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = () =>
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ic7mg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
