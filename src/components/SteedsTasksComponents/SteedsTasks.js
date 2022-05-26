import{TheHeader}from"./TheHeader/TheHeader.js";
import{TheMiddle}from"./TheMiddle/TheMiddle.js";
import{ProfileMenu}from"./ProfileMenu/ProfileMenu.jsx";
import{SettingsMenu}from"./SettingsMenu/SettingsMenu.jsx";
import react from"react";

const SteedsTasks=()=>{
    const[settingsIconClicked,setSettingsIconClicked]=react.useState(false);
    const[profileIconClicked,setProfileIconClicked]=react.useState(false);
    return(
        <div id="mainContent">
            <TheHeader settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <ProfileMenu profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <SettingsMenu settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked} />
            <TheMiddle />
        </div>
    );
}
export{SteedsTasks};