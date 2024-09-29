import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function createUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    return user;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error; // Retorna o erro para ser tratado no formulário
  }
}