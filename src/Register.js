import React from "react";

export default function Register() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username" />
            <label htmlFor="register-password">Password:</label>
            <input type="text" name="register-password" id="register-password" />
            <input type="submit" value="Register" />
        </form>
    )
}