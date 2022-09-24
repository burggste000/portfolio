// import React from "react";
// import { AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
// import { useIsAuthenticated } from "@azure/msal-react";
// import{LandingPage}from"../LandingPage.jsx";
// import{SignOutButton}from"../SignOutButton";
// import{SteedsTasks}from"../SteedsTasksComponents/SteedsTasks.js";
// import"./App.css";
// function App(){
//     const isAuthenticated = useIsAuthenticated();

//     return(
//         <main>
//             <AuthenticatedTemplate>
//                 <SteedsTasks />
//             </AuthenticatedTemplate>
//             <UnauthenticatedTemplate>
//                 <div id="logo">
//                 <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_960_720.png"alt="text" />
//                 </div>
//                 <p id="appName">Task Management</p>
//                 <p id="motto">The better organized, the better your day will go!</p>
//                 <div id="signBtn">
//                     { isAuthenticated ? <SignOutButton /> : <LandingPage /> }
//                 </div>
//             </UnauthenticatedTemplate>
//         </main>
//     );
// };
// export default App;
import{Routes,Route}from"react-router-dom";
import{TaskManagementParentComponent}from"../TaskManagementParentComponent/TaskManagementParentComponent.jsx";
import{RootLandingPage}from"../RootLandingPage/RootLandingPage.jsx";
const App=()=>{
    return(
        <Routes>
            <Route path='/'element={<RootLandingPage />} />
            <Route path="taskManagement"element={<TaskManagementParentComponent />} />
        </Routes>
    );
};
export default App;