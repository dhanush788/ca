import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserContext } from "../functions/auth/userContext";
import Landing from "../pages/landing";
import Home from "../pages/home";
import ProtectedRoute from "./protected";
import Register from "../pages/Register";
import { notRegistered } from "../functions/auth/signIn";

const AllRoutes = () => {
  const { user, loading } = React.useContext(UserContext);

  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route
        path="home"
        element={
          <ProtectedRoute user={user} loading={loading} redirectPath={"/"}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default AllRoutes;
