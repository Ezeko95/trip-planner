import UserModel from "../models/User";

export const createUser = async (
  id: number,
  name: string,
  email: string,
  password: string
) => {
  // Create a new user
  const newUser = UserModel.create({
    id,
    name,
    email,
    password,
  });
  return newUser;
};

export const getUserByID = async (id: string) => {
  const user = await UserModel.findOne({ where: { id } });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
