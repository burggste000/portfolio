import{TheHeader}from"./TheHeader/TheHeader.js";
import{TheMiddle}from"./TheMiddle/TheMiddle.js";
import{ProfileMenu}from"./ProfileMenu/ProfileMenu.jsx";
import{SettingsMenu}from"./SettingsMenu/SettingsMenu.jsx";
import{ListsMenu}from"./ListsMenu/ListsMenu.jsx";
import{OptionsMenu}from"./OptionsMenu/OptionsMenu.jsx";
import{SortMenu}from"./SortMenu/SortMenu.jsx";
import react from"react";

const SteedsTasks=()=>{
    const[settingsIconClicked,setSettingsIconClicked]=react.useState(false);
    const[profileIconClicked,setProfileIconClicked]=react.useState(false);
    const[listsMenuClicked,setListsMenuClicked]=react.useState(true);
    const[currentList,setCurrentList]=react.useState("Tasks");
    const[currentListTasks,setCurrentListTasks]=react.useState(null);
    const[completedNumber,setCompletedNumber]=react.useState(0);
    const[centerPageOptions,setCenterPageOptions]=react.useState(false);
    const[sortMenuClicked,setSortMenuClicked]=react.useState(false);

    return(
        <>
            <TheHeader settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <ProfileMenu profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <SettingsMenu settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked} />
            <OptionsMenu centerPageOptions={centerPageOptions}currentList={currentList}listsMenuClicked={listsMenuClicked} />
            <SortMenu sortMenuClicked={sortMenuClicked} />
            <ListsMenu listsMenuClicked={listsMenuClicked}setListsMenuClicked={setListsMenuClicked}setCurrentList={setCurrentList}currentList={currentList}setCurrentListTasks={setCurrentListTasks}currentListTasks={currentListTasks}setCompletedNumber={setCompletedNumber} />
            <TheMiddle listsMenuClicked={listsMenuClicked}setListsMenuClicked={setListsMenuClicked}currentList={currentList}currentListTasks={currentListTasks}completedNumber={completedNumber}centerPageOptions={centerPageOptions}setCenterPageOptions={setCenterPageOptions}sortMenuClicked={sortMenuClicked}setSortMenuClicked={setSortMenuClicked} />
        </>
    );
};
export{SteedsTasks};