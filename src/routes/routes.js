import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import {UserContext} from "../functions/auth/userContext";
import Landing from "../pages/landing";
import Home from "../pages/home";
import ProtectedRoute from "./protected";
import Register from "../pages/Register";
import {notRegistered} from "../functions/auth/signIn";
import Rules from "../pages/Rules";

const AllRoutes = () => {
    const {user, loading} = React.useContext(UserContext);
    console.log(user)
    return (
        <Routes>
            <Route index element={
                // <ProtectedRoute user={user} loading={loading} redirectPath={"/rules"} invert>
                    <Landing/>
                // </ProtectedRoute>
            }/>
            <Route
                path="home"
                element={
                    <ProtectedRoute user={user} loading={loading} redirectPath={"/"}>
                        <Home/>
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<p>There's nothing here: 404!</p>}/>
            <Route path="/register" element={
                <ProtectedRoute user={user} loading={loading} redirectPath={"/"} check={notRegistered}
                                checkRedirect="/rules">
                    <Register/>
                </ProtectedRoute>
            }
            />

            <Route path="/rules" element={
                <ProtectedRoute user={user} loading={loading} redirectPath={"/"}>
                    <Rules/>
                // </ProtectedRoute>
            }/>
        </Routes>
    );
};

export default AllRoutes;
