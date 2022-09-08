import"./optionsMenu.css";
import{graphConfig,loginRequest}from"../../../authConfig.js";
import{callMsGraphForLists,callMsGraphForListTasks,callMsGraphForDeleteList}from"../../../graph.js";
import react from"react";
import{useMsal}from"@azure/msal-react";

const OptionsMenu=props=>{
    const[renameListHovered,setRenameListHovered]=react.useState(false);
    const[changeThemeHovered,setChangeThemeHovered]=react.useState(false);
    const[showCompletedTasksHovered,setShowCompletedTasksHovered]=react.useState(false);
    const[printHovered,setPrintHovered]=react.useState(false);
    const[deleteListHovered,setDeleteListHovered]=react.useState(false);

    const centerPageOptionsMenuClass=()=>{
        if(props.centerPageOptions===false){
            return"hide";
        }
        else{
            if(props.listsMenuClicked===true&&props.currentList!=="My Day"&&props.currentList!=="Assigned To Me"&&props.currentList!=="Flagged email"&&props.currentList!=="Tasks"){
                return"myListsOptions";
            }
            if(props.listsMenuClicked===false&&props.currentList!=="My Day"&&props.currentList!=="Assigned To Me"&&props.currentList!=="Flagged email"&&props.currentList!=="Tasks"){
                return"wideMyListsOptions";
            }
            if(props.listsMenuClicked===true&&props.currentList==="My Day"){
                return"myDayOptionsMenu";
            }
            if(props.listsMenuClicked===false&&props.currentList==="My Day"){
                return"wideMyDayOptionsMenu";
            }
            if(props.listsMenuClicked===true&&props.currentList==="Assigned To Me"){
                return"assignedOptionsMenu";
            }
            if(props.listsMenuClicked===false&&props.currentList==="Assigned To Me"){
                return"wideAssignedOptionsMenu";
            }
            if(props.listsMenuClicked===true&&props.currentList==="Flagged email"){
                return"flaggedOptionsMenu";
            }
            if(props.listsMenuClicked===false&&props.currentList==="Flagged email"){
                return"wideFlaggedOptionsMenu";
            }
            if(props.listsMenuClicked===true&&props.currentList==="Tasks"){
                return"assignedOptionsMenu";
            }
            if(props.listsMenuClicked===false&&props.currentList==="Tasks"){
                return"wideAssignedOptionsMenu";
            }
        }
    };

    const renameListId=()=>{
        if(renameListHovered===false){
            if(props.currentList==="My Day"||props.currentList==="Assigned To Me"||props.currentList==="Flagged email"||props.currentList==="Tasks"){
                return"hide";
            }
            else{
                return"renameList";
            }
        }
        if(renameListHovered===true){
            if(props.currentList!=="My Day"||props.currentList!=="Assigned To Me"||props.currentList!=="Flagged email"||props.currentList!=="Tasks"){
                return"darkRenameList";
            }
        }
    };

    const changeThemeId=()=>{
        if(changeThemeHovered===false){
            if(props.currentList==="Assigned To Me"||props.currentList==="My Day"){
                return"hide";
            }
            else{
                return"changeThemeDiv";
            }
        }
        if(changeThemeHovered===true){
            if(props.currentList==="Assigned To Me"||props.currentList==="My Day"){
                return"hide";
            }
            else{
                return"darkChangeThemeDiv";
            }
        }
    };

    const optionsCompletedShowDiv=()=>{
        if(showCompletedTasksHovered===false){
            if(props.currentList==="Assigned To Me"||props.currentList==="Flagged email"){
                return"showCompletedTasksDiv";
            }
            else{
                return"hide";
            }
        }
        if(showCompletedTasksHovered===true){
            if(props.currentList==="Assigned To Me"||props.currentList==="Flagged email"){
                return"darkShowCompletedTasksDiv";
            }
            else{
                return"hide";
            }
        }
    };

    const deleteListOptionId=()=>{
        if(deleteListHovered===false){
            if(props.currentList==="My Day"||props.currentList==="Assigned To Me"||props.currentList==="Flagged email"||props.currentList==="Tasks"){
                return"hide";
            }
            else{
                return"deleteList";
            }
        }
        if(deleteListHovered===true){
            if(props.currentList!=="My Day"||props.currentList!=="Assigned To Me"||props.currentList!=="Flagged email"||props.currentList!=="Tasks"){
                return"darkDeleteList";
            }
        }
    };

    const themesOptionsId=()=>{
        if(changeThemeHovered===false){
            return"hide";
        }
        if(changeThemeHovered===true&&props.currentList==="Tasks"){
            return"tasksChangeTheme";
        }
        if(changeThemeHovered===true&&props.currentList==="Flagged email"){
            return"tasksChangeTheme";
        }
        else{
            return"themes";
        }
    };

    const getLists=()=>{
        let tasksListId;
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForLists(response.accessToken).then(response=>{
                props.setLists(response);
                tasksListId=response.value[0].id;
                graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+tasksListId+"/tasks";
            }).then(()=>{
                instance2.acquireTokenSilent(request).then(response=>{
                    callMsGraphForListTasks(response.accessToken).then(response=>{
                        let thisResponse=response.value;
                        props.setCurrentListTasks(thisResponse);
                        let count=0;
                        for(let i=0;i<thisResponse.length;++i){
                            if(props.currentListTasks!==undefined&&props.currentListTasks!==null&&props.currentListTasks[i]!==undefined&&props.currentListTasks[i]!==null&&props.currentListTasks[i].status!==undefined&&props.currentListTasks[i].status!==null){
                                if(props.currentListTasks[i].status==="completed"){
                                    ++count;
                                }
                            }
                        }
                        props.setCompletedNumber(count);
                    });
                });
            });
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForLists(response.accessToken).then(response=>{
                    props.setLists(response);
                });
            });
        });
    };

    const deleteList=()=>{
        let thisListId;
        for(let i=0;i<props.lists.value.length;++i){
            if(props.lists.value[i].displayName===props.currentList){
                thisListId=props.lists.value[i].id;
                break;
            }
        }
        graphConfig.graphMeDeleteListEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+thisListId;
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForDeleteList(response.accessToken).then(()=>{
                getLists();
            }).then(()=>{
                props.setCurrentList("Tasks");
            });
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForDeleteList(response.accessToken).then(()=>{
                });
            });
        });
    };

    const{instance:instance2,accounts}=useMsal();    

    return(
        <div id={centerPageOptionsMenuClass()}>
            <div id="listOptionsDiv">
                <h4 id="listOptionsText">{props.currentList==="Assigned To Me"||props.currentList==="Flagged email"?"Options":"List options"}</h4>
            </div>
            <div id={renameListId()}onMouseEnter={()=>setRenameListHovered(true)}onMouseLeave={()=>setRenameListHovered(false)}>
                <img id={renameListHovered===false?"renameListIcon":"darkRenameListIcon"}src="https://image.shutterstock.com/image-vector/modern-flat-text-cursor-colorful-600w-1943695351.jpg"alt="input icon" />
                <p id="renameListText">Rename list</p>
            </div>
            <div id={changeThemeId()}onMouseEnter={()=>setChangeThemeHovered(true)}onMouseLeave={()=>setChangeThemeHovered(false)}>
                <img id={changeThemeHovered===false?"changeThemeIcon":"darkChangeThemeIcon"}src="https://image.shutterstock.com/image-vector/palette-icon-line-art-style-600w-2162922165.jpg"alt="theme icon" />
                <p id="changeThemeText">Change theme</p>
                <img id={changeThemeHovered===false?"changeThemeArrow":"darkChangeThemeArrow"}src="https://image.shutterstock.com/image-vector/arrow-icon-trendy-flat-style-600w-747358468.jpg"alt="show themes" />
            </div>
            <div id={optionsCompletedShowDiv()}onMouseEnter={()=>setShowCompletedTasksHovered(true)}onMouseLeave={()=>setShowCompletedTasksHovered(false)}>
                <img id={showCompletedTasksHovered===false?"completedIcon":"darkCompletedIcon"}src="https://image.shutterstock.com/image-vector/checkmark-vector-icon-600w-556878373.jpg"alt="marked as completed task" />
                <p id="showCompletedText">Show completed tasks</p>
            </div>
            <div id={printHovered===false?"printListDiv":"darkPrintListDiv"}onMouseEnter={()=>setPrintHovered(true)}onMouseLeave={()=>setPrintHovered(false)}>
                <img id={printHovered===false?"printIcon":"darkPrintIcon"}src="https://image.shutterstock.com/image-vector/printer-icon-vector-design-illustration-600w-1492370306.jpg"alt="print icon" />
                <p id="printListText">Print list</p>
            </div>
            <div id={deleteListOptionId()}onMouseEnter={()=>setDeleteListHovered(true)}onMouseLeave={()=>setDeleteListHovered(false)}onClick={()=>deleteList()}>
                <img id={deleteListHovered===false?"deleteListIcon":"darkDeleteListIcon"}onClick={()=>deleteList()}src="https://image.shutterstock.com/image-vector/flat-delete-icons-red-trash-600w-1251122569.jpg"alt="trash can" />
                <p id="deleteListText"onClick={()=>deleteList()}>Delete List</p>
            </div>
            <div id={themesOptionsId()}onMouseEnter={()=>setChangeThemeHovered(true)}onMouseLeave={()=>setChangeThemeHovered(false)}>
                <div id="darkBlue">
                    <img id="selectedTheme"src="https://image.shutterstock.com/image-vector/checkmark-vector-icon-600w-556878373.jpg"alt="chosen theme" />
                </div>
                <div id="red"></div>
                <div id="purple"></div>
                <div id="green"></div>
                <div id="lightBlue"></div>
            </div>                    
        </div>
    );
};
export{OptionsMenu};