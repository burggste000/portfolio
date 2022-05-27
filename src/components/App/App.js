import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";
import{LandingPage}from"../LandingPage.jsx";
import{SignOutButton}from"../SignOutButton";
import"./App.css";
import{SteedsTasks}from"../SteedsTasksComponents/SteedsTasks.js";
//I got the code for connecting to Microsoft's Graph API from the following website:
//  https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
function App() {

    const isAuthenticated = useIsAuthenticated();

    return (
        <main>
            <AuthenticatedTemplate>
                <SteedsTasks />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <div id="logo">
                <img src="https://image.shutterstock.com/image-vector/silhouette-horses-running-blue-background-600w-704541676.jpg"alt="text" />
                </div>
                <p id="appName">Steed's Tasks</p>
                <p id="motto">The better organized, the better your day will go!</p>
                <div id="signBtn">
                    { isAuthenticated ? <SignOutButton /> : <LandingPage /> }
                </div>
            </UnauthenticatedTemplate>
        </main>
    );
}
export default App;