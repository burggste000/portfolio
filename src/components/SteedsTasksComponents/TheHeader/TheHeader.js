import"./theHeader.css";
import react from"react";
import{loginRequest}from"../../../authConfig.js";
import{useMsal}from"@azure/msal-react";
import{callMsGraphForPhoto}from"../../../graph.js";

const TheHeader=props=>{

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
    };

    const{instance:instance2,accounts}=useMsal();
    const[photo,setPhoto]=react.useState(null);

    react.useEffect(()=>{
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForPhoto(response.accessToken).then(response=>setPhoto((window.URL||window.webkitURL).createObjectURL(response)));
        }).catch(e=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForPhoto(response.accessToken).then(response=>setPhoto((window.URL||window.webkitURL).createObjectURL(response)));
            });
        });
    },[]);

    return(
        <header>
            <div id="leftHeader">
                <h1>Task Management</h1>
            </div>
            <div id={searchHovered===false?"middleHeader":"brightMiddleHeader"}onMouseEnter={()=>setSearchHovered(true)}onMouseLeave={()=>searchFocused===true?null:setSearchHovered(false)}>
                <img className={searchImgClass}onClick={clickSearchPic}src="https://image.shutterstock.com/image-vector/search-icon-flat-vector-graphic-600w-1582905133.jpg"alt="text" />
{/*Working here*/}
                <input className={searchBarClass}type="text"onFocus={()=>setSearchFocused(true)}onBlur={()=>{setSearchFocused(false);setSearchHovered(false);}} />
                <img id={searchFocused===false?"displayNone":"searchX"}src="https://image.shutterstock.com/image-vector/cancel-cross-close-icon-vector-600w-294801173.jpg"alt="text" />
            </div>
            <div id="rightHeader">
                <div id={props.settingsIconClicked===false?"settingsDiv":"lightSettingsDiv"}onClick={()=>{if(props.profileIconClicked===true){props.setProfileIconClicked(!props.profileIconClicked);props.setSettingsIconClicked(!props.settingsIconClicked);}else{props.setSettingsIconClicked(!props.settingsIconClicked);}}}>
                    <img id="settingsPic"src="https://image.shutterstock.com/image-vector/setting-flat-vector-icon-ui-600w-1632567877.jpg"alt="text" />
                </div>
                <div id={!props.profileIconClicked?"profileDiv":"darkProfileDiv"}onClick={()=>{if(props.settingsIconClicked===true){props.setSettingsIconClicked(!props.settingsIconClicked);props.setProfileIconClicked(!props.profileIconClicked);}else{props.setProfileIconClicked(!props.profileIconClicked);}}}>
                    <img id="profilePic"src={photo}alt="text" />
                </div>
            </div>
        </header>
    );
}
export{TheHeader};