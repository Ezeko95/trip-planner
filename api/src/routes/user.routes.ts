import express from "express";
import { createUserHandler } from "../handlers/user.handler";
const userRouter = express.Router();

// Create a new user
userRouter.post("/", createUserHandler);
userRouter.get("/:id");

export default userRouter;
