import React from "react";
import { useMsal } from "@azure/msal-react";
// import Button from "react-bootstrap/Button";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <button onClick={() => handleLogout(instance)}>Sign out</button>
    );
}