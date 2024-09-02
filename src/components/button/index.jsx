import React from "react";
import './button.css';
export function Button({ type = 'button', children, onClick }) {
    return (
        <button className="container--button" type={type} onClick={onClick}>
            {children}
        </button>
    );
}