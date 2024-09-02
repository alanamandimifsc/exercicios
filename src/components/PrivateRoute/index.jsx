import React, { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AutenticatorContext } from "../../contexts/autenticator";

export function PrivateRoute({ element }) {
    const { usuario } = useContext(AutenticatorContext);
    return usuario ? element : <Navigate to="/" />;
}