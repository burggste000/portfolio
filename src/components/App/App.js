import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "../ProfileData";
import { callMsGraph } from "../../graph";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "../SignInButton";
import { SignOutButton } from "../SignOutButton";
import"./App.css"



//I got all of the code for setting up this entire project from the following website:
//  https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react

function App() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
         {/* <PageLayout> */}
            <AuthenticatedTemplate>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                <h5 className="card-title">Welcome {name}</h5>
                {graphData?<ProfileData graphData={graphData} />:<Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                <p>You are not signed in! Please sign in.</p>
                <div id="logo">
                <img src="https://image.shutterstock.com/image-vector/silhouette-horses-running-blue-background-600w-704541676.jpg"alt="text" />
                </div>
                <p id="appName">Steed's Tasks</p>
                <p id="motto">The better organized, the better your day will go!</p>
                <div id="signBtn">
                    <button>Sign in</button>
                </div>

            </UnauthenticatedTemplate>
        {/* </PageLayout> */}
        </>
    );
}
export default App;