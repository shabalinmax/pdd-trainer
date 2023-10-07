import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {User} from "@firebase/auth";

export const signInWithGoogle = async (): Promise<User | null> => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
}
export const signInWithEmail = async (body: {email: string, password: string}): Promise<User | null> => {
    const {email, password} = body
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user;
}