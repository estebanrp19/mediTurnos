import User from "../entities/User";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import { userModel } from "../repositories";
import { createCredential } from "./credentialsService";
import Credential from "../entities/Credential";
import { messages } from "../commons/messages";

export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: ["appointments"]
    });
    return allUsers;
}

export const getUserByIdService = async(id: number): Promise<User> => {
    
    const user: User | null = await userModel.findOne({
        where: { id },
        relations: ["appointments"]
    })
    
    if(!user) throw new Error(messages.error.userNotFound);
    return user;
}

const validateEmail = async ( email: string ): Promise<boolean> => {
    var existe = false;
    const result = await userModel.find({
        where: { email },
    })
    if( result.length === 0 ){
        existe = true;
    }

    return existe;
}
export const createUserService = async (
    createUserDto: ICreateUserDto
) => {
    const emailExist = await validateEmail(createUserDto.email)
    if(!emailExist){
        throw Error("El email ya esta en uso")
    }

    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser: User = userModel.create(createUserDto);
    await userModel.save(newUser);

    newUser.credential = newCredential;
    await userModel.save(newUser);

    return newUser;
}

export const findUserByCredentialId = async (credentialId: number) => {
    const user: User | null = await userModel.findOneBy({
      credential: { id: credentialId }
    });

    if (!user) throw new Error("No se encontro el usuario");
    return user;
}