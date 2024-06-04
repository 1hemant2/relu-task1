import { auth, db } from './config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export const loginUser = async (payload) => {
    try {
        const { email, password } = payload;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return {
            success: true,
            uid: user.uid
        }
    } catch (error) {
        return error;
    }
}
export const registerUser = async (payload) => {
    try {
        const { name, email, password } = payload;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await addDoc(collection(db, "User"), {
            uid: user.uid,
            name: name,
            email: email
        });
        return "success";
    } catch (error) {
        return error;
    }
}

export const fetchUserData = async (uid) => {
    try {
        // uid = "w0vo9uHqMqQrD89Dbv0l";
        const userDoc = await getDoc(doc(db, "User", uid));
        console.log(userDoc);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("User data:", userData);
            return userData;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};