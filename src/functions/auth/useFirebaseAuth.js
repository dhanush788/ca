import { useState, useEffect } from 'react'
import { auth } from './firebase';

const formatAuthUser = (user, referral) => ({
    uid: user.uid,
    email: user.email,
    token: user.accessToken,
    referral: referral
});
const updateReferral = (token, updater)=>{
    fetch(process.env.REACT_APP_API_URL + "api/ca/getref", {
            headers: {
                Authorization: token
            },
            method: "POST",
            // mode: 'no-cors',
        }).then(res => res.json()).then((data => {
            updater((old)=>({...old, referral: data.referral}))
        }))
}
export default function useFirebaseAuth() {
    const [user, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return;
        }
        let referral = null;
        updateReferral(authState.accessToken, setAuthUser)
        
        var formattedUser = formatAuthUser(authState, referral);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    // listen for Firebase state change
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);


    return {
        user,
        loading
    };
}