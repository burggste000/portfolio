import"./theHeader.css";
import react from"react";

const TheHeader=(props)=>{

    const[searchHovered,setSearchHovered]=react.useState(false);
    const[searchFocused,setSearchFocused]=react.useState(false);
    const[searchBarClass,setSearchBarClass]=react.useState("search hideSearch");
    const[searchImgClass,setSearchImgClass]=react.useState("searchPic");

    const clickSearchPic=()=>{
        if(searchBarClass==="search hideSearch"){
            setSearchBarClass("search smallSearch");   
        }
        else{
            setSearchBarClass("search hideSearch");
        }
        if(searchBarClass==="search hideSearch"){
            setSearchImgClass("searchPic searchPicSquare");
        }
        else{
            setSearchImgClass("searchPic");
        }
    }
    return(
        <header>
            <div id="leftHeader">
                <h1>Steeds Tasks</h1>
            </div>
            <div id={searchHovered===false?"middleHeader":"brightMiddleHeader"}onMouseEnter={()=>setSearchHovered(true)}onMouseLeave={()=>searchFocused===true?null:setSearchHovered(false)}>
                <img className={searchImgClass}onClick={clickSearchPic}src="https://image.shutterstock.com/image-vector/search-icon-flat-vector-graphic-600w-1582905133.jpg"alt="text" />
                <input className={searchBarClass}type="text"onFocus={(e)=>{setSearchFocused(true);}}onBlur={()=>{setSearchFocused(false);setSearchHovered(false);}} />
                <img id={searchFocused===false?"displayNone":"searchX"}src="https://image.shutterstock.com/image-vector/cancel-cross-close-icon-vector-600w-294801173.jpg"alt="text" />
            </div>
            <div id="rightHeader">
                <div id={props.settingsIconClicked===false?"settingsDiv":"lightSettingsDiv"}onClick={()=>{if(props.profileIconClicked===true){props.setProfileIconClicked(!props.profileIconClicked);props.setSettingsIconClicked(!props.settingsIconClicked);}else{props.setSettingsIconClicked(!props.settingsIconClicked);}}}>
                    <img id="settingsPic"src="https://image.shutterstock.com/image-vector/setting-flat-vector-icon-ui-600w-1632567877.jpg"alt="text" />
                </div>
                <div id={!props.profileIconClicked?"profileDiv":"darkProfileDiv"}onClick={()=>{if(props.settingsIconClicked===true){props.setSettingsIconClicked(!props.settingsIconClicked);props.setProfileIconClicked(!props.profileIconClicked);}else{props.setProfileIconClicked(!props.profileIconClicked);}}}>
                    <img id="profilePic"src="https://image.shutterstock.com/image-vector/neon-human-head-cpu-blue-600w-508239127.jpg"alt="text" />
                </div>
            </div>
        </header>
    );
}
export{TheHeader};