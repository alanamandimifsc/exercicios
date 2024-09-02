import React, { createContext, useState, useEffect } from "react";

export const AutenticatorContext = createContext();

export function AutenticatorProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    const login = (usuarioData) => {
        setUsuario(usuarioData);
        localStorage.setItem('usuario', JSON.stringify(usuarioData));
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('usuario');
    };

    useEffect(() => {
        const usuarioStorage = localStorage.getItem('usuario');
        if (usuarioStorage) {
            setUsuario(JSON.parse(usuarioStorage));
        }
    }, []);

    return (
        <AutenticatorContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AutenticatorContext.Provider>

    );

}