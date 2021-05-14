import mongoose from "mongoose";
import { app } from "./app";

const PORT = 3000;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to mongo db");
  } catch (error) {
    console.error(error);
  }

  app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}!`);
  });
};

start();
