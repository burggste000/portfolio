import{TheHeader}from"./TheHeader/TheHeader.js";
import{TheMiddle}from"./TheMiddle/TheMiddle.js";
import react from"react";

const SteedsTasks=(props)=>{
    const[settingsIconClicked,setSettingsIconClicked]=react.useState(false);
    const[profileIconClicked,setProfileIconClicked]=react.useState(false);
    return(
        <div id="mainContent">
            <TheHeader settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <TheMiddle settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
        </div>
    );
}
export{SteedsTasks};