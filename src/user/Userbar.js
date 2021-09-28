import React from "react";
import Logout from "../Logout";
import Register from "../Register";
import Username from "../Username";

export default function Userbar() {
    const user = 'kjghkugb'

    if (user) {
        return <Logout user={user} />
    } else {
        return (
            <>
                <Username />
                <Register />
            </>
        )
    }
}