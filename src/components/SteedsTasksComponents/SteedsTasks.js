import{TheHeader}from"./TheHeader/TheHeader.js";
import{TheMiddle}from"./TheMiddle/TheMiddle.js";
import{ProfileMenu}from"./ProfileMenu/ProfileMenu.jsx";
import react from"react";

const SteedsTasks=(props)=>{
    const[settingsIconClicked,setSettingsIconClicked]=react.useState(false);
    const[profileIconClicked,setProfileIconClicked]=react.useState(false);
    return(
        <div id="mainContent">
            <TheHeader settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <ProfileMenu profileIconClicked={profileIconClicked} />
            <TheMiddle settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
        </div>
    );
}
export{SteedsTasks};