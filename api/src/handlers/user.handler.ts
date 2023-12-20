import { createUser, getUserByID } from "../controllers/user.controller";
import { Request, Response } from "express";

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    console.log("1")

    if (!user.name || !user.email || !user.password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required" });
    }
    // Save the user to the database
    const createdUser = await createUser(
      user.id,
      user.name,
      user.email,
      user.password
    );

    res.status(201).json(createdUser);
    console.log("2")
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserByIDHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await getUserByID(id);
    res.status(200).json(user);
  } catch (error) {
    if ((error as Error).message === "User not found") {
      return res.status(404).json({ message: (error as Error).message });
    }
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
