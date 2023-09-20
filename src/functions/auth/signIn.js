import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {ref, get, child} from "firebase/database";
import {auth, db} from "./firebase";

const provider = new GoogleAuthProvider()
export const signInWithGoogle = (onSuccess = () => {
}, onFalure = () => {
}) => {

    return () => signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            onSuccess(user)
            // IdP data available using getAdditionalUserInfo(result)
        }).catch((error) => {
            onFalure(error)
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}


export async function notRegistered(user) {
    console.log("checking if registered")
    const userId = user.uid;
    const dbRef = ref(db)

    try {
        const snapshot = await get(child(dbRef, `CA/${userId}`));
        if (snapshot.exists()) {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        console.error(e);
        return true;
    }


}