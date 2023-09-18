import React from "react";
import {signInWithGoogle} from "../functions/auth/signIn";

export default function Landing(){
    return (
        <>
            <h1>
                landing
            </h1>
            <button onClick={signInWithGoogle}>sign in</button>
        </>

    )
}