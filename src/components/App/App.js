import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";
import{LandingPage}from"../LandingPage.jsx";
import{SignOutButton}from"../SignOutButton";
import"./App.css";
import{SteedsTasks}from"../SteedsTasksComponents/SteedsTasks.js";
//I got all of the code for setting up this entire project from the following website:
//  https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
function App() {

    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <AuthenticatedTemplate>
                {/* { isAuthenticated ? <SignOutButton /> : <LandingPage /> }
                <h5 className="card-title">Welcome {name}</h5>
                {graphData?<ProfileData graphData={graphData} />:<Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>} */}
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
        </>
    );
}
export default App;