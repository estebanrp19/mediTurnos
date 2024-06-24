import { Request, Response } from "express";
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "../services/usersService";
import ICredential from "../interfaces/ICredential";
import { validateCredential } from "../services/credentialsService";
import User from "../entities/User";
import { messages } from "../commons/messages";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({message: "Error"})
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: User = await getUserByIdService(Number(id));
    res.status(200).json(user)
  } catch (error: any) {
    console.log(error)
    res.status(404).json(messages.error.userNotFound);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json({ message: "Usuario creado con éxito" })
  } catch (error: any) {
    res.status(400).json(messages.error.incorrectData);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credential: ICredential = await validateCredential({
      username, 
      password
    });
    const user = await findUserByCredentialId(credential.id)
    res.status(200).json({
      loggin: true, 
      user
    });
  } catch (error: any) {
      res.status(400).json(messages.error.incorrectData);
  }
};
