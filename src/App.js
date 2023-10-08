import React from "react";
import {UserContext} from "./functions/auth/userContext";
import useFirebaseAuth from "./functions/auth/useFirebaseAuth";
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import AllRoutes from "./routes/routes";
import Referral from "./components/Refferal";

function App() {
    const {user, loading} = useFirebaseAuth()
    React.useEffect(() => {
        }, [user])
    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, loading}}>
                <AllRoutes/>
                {user && <Referral/>}
            </UserContext.Provider>
        </BrowserRouter>
    )
}


export default App;
