import ICreateCredentialDto from "../interfaces/ICreateCredentialDto";
import Credential from "../entities/Credential";
import { credentialModel } from "../repositories";
import IValidateCredentialDto from "../interfaces/IValidateCredentialDto";

export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
) => {
  //* Crear Credencial
  const newCredential: Credential = credentialModel.create(createCredentialDto);

  await credentialModel.save(newCredential);

  return newCredential;
};

export const validateCredential = async (
  validateCredentialDto: IValidateCredentialDto
): Promise<Credential> => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credential | null = await credentialModel.findOneBy({
    username,
  });

  //* Validar que el usuario no exista y que el password sea correcto
  if (!foundCredential) throw Error("Credenciales incorrectas");
  if (password !== foundCredential?.password)
    throw Error("Credenciales incorrectas");
  return foundCredential;
};
