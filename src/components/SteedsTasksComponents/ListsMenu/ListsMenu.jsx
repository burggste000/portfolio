import"./listsMenu.css";
import react from"react";
import{graphConfig,loginRequest}from"../../../authConfig.js";
import{callMsGraphForListTasks,callMsGraphForLists,callMsGraphForCreateList}from"../../../graph.js";
import{useMsal}from"@azure/msal-react";


const ListsMenu=props=>{
    const[listsMenuId,setListsMenuId]=react.useState("listsMenu");
    const[screenWidth,setScreenWidth]=react.useState(window.innerWidth);
    const[newList,setNewList]=react.useState('');

    react.useEffect(()=>{
        if(props.listsMenuClicked===true){
            setListsMenuId("listsMenu");
        }
        else{
            setListsMenuId("hideListsMenu");
        }
    },[props.listsMenuClicked]);

    const checkWindowSize=()=>{
        if(window.innerWidth<screenWidth){
            setListsMenuId("hideListsMenu");
            props.setListsMenuClicked(!props.listsMenuClicked);
            setScreenWidth(window.innerWidth);
        }
        else{
            setScreenWidth(window.innerWidth);
        }
    };

    window.onresize=checkWindowSize;

    const findListByName=name=>props.lists.value.find(value=>value.displayName===name);

    const findListIdByName=name=>findListByName(name).id;

    const{instance:instance2,accounts}=useMsal();

    const clickedListDiv=event=>{
        let thisText=event.target.children[1].textContent;
        props.setCurrentList(thisText);
        
        graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(thisText)+"/tasks";  
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForListTasks(response.accessToken).then(response=>{props.setCurrentListTasks(response.value);console.log(props.currentListTasks);let count=0;for(let i=0;i<props.currentListTasks.length;++i){if(props.currentListTasks[i].status==="completed"){++count;}}props.setCompletedNumber(count);});
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response));
            });
        });
    };

    const clickedListText=event=>{
        let thisText=event.target.textContent;
        props.setCurrentList(thisText);

        graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(thisText)+"/tasks";  
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForListTasks(response.accessToken).then(response=>{props.setCurrentListTasks(response.value);console.log(props.currentListTasks);let count=0;for(let i=0;i<props.currentListTasks.length;++i){if(props.currentListTasks[i].status==="completed"){++count;}}props.setCompletedNumber(count);});
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response));
            });
        });

        event.stopPropagation();
    };
    
    const clickedListImg=event=>{
        let thisText=event.target.nextElementSibling.textContent;
        props.setCurrentList(thisText);
        
        graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(thisText)+"/tasks";  
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForListTasks(response.accessToken).then(response=>{props.setCurrentListTasks(response.value);console.log(props.currentListTasks);let count=0;for(let i=0;i<props.currentListTasks.length;++i){if(props.currentListTasks[i].status==="completed"){++count;}}props.setCompletedNumber(count);});
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response));
            });
        });

        event.stopPropagation();
    };
    
    const createList=string=>{
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForCreateList(response.accessToken,string)
            .then(()=>{
                getLists();
            })
            .catch(err=>console.log(err));
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForCreateList(response.accessToken,string)
                .then(()=>{
                    getLists();
                });
            });
        });
    };

    const getLists=()=>{
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForLists(response.accessToken).then(response=>{
                props.setLists(response);
            });
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForLists(response.accessToken).then(response=>{
                    props.setLists(response);
                });
            });
        });
    };

    react.useEffect(()=>{
        getLists();
    },[]);

    return(
        <div id={props.listsMenuClicked===false?"hideListsMenu":listsMenuId}>
            <div id="listsMenuButtonDiv">
                <img id="listsMenuButton"src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>props.setListsMenuClicked(!props.listsMenuClicked)} />
            </div>
            <div id="listsScrollDiv">
                <div id={props.currentList!=="My Day"?"listsMenuDayDiv":"listsMenuDayDivDark"}onClick={clickedListDiv}>
                    <img id={props.currentList!=="My Day"?"listsMenuDayImage":"listsMenuDayImageDark"}src="https://image.shutterstock.com/image-vector/sun-vector-icon-modern-design-600w-1415031134.jpg"alt="text"onClick={clickedListImg} />
                    <h4 id={props.currentList!=="My Day"?"listsMenuDayText":"listsMenuDayTextBlue"}onClick={clickedListText}>My Day</h4>
                </div>
                <div id={props.currentList!=="Assigned To Me"?"listsMenuAssignedDiv":"listsMenuAssignedDivDark"}onClick={clickedListDiv}>
                    <img id={props.currentList!=="Assigned To Me"?"listsMenuAssignedImage":"listsMenuAssignedImageDark"}src="https://image.shutterstock.com/image-vector/flat-portrait-black-man-icon-600w-2134341081.jpg"alt="text"onClick={clickedListImg} />
                    <h4 id={props.currentList!=="Assigned To Me"?"listsMenuAssignedText":"listsMenuAssignedTextBlue"}onClick={clickedListText}>Assigned To Me</h4>
                </div>
                <div id={props.currentList!=="Flagged email"?"listsMenuFlaggedDiv":"listsMenuFlaggedDivDark"}onClick={clickedListDiv}>
                    <img id={props.currentList!=="Flagged email"?"listsMenuFlaggedImage":"listsMenuFlaggedImageDark"}src="https://image.shutterstock.com/image-vector/line-icon-flag-600w-654361600.jpg"alt="text"onClick={clickedListImg} />
                    <h4 id={props.currentList!=="Flagged email"?"listsMenuFlaggedText":"listsMenuFlaggedTextBlue"}onClick={clickedListText}>Flagged email</h4>
                </div>
                <div id={props.currentList!=="Tasks"?"listsMenuTasksDiv":"listsMenuTasksDivDark"}onClick={clickedListDiv}>
                    <img id={props.currentList!=="Tasks"?"listsMenuTasksImage":"listsMenuTasksImageDark"}src="https://image.shutterstock.com/image-vector/home-icon-trendy-flat-style-600w-675381382.jpg"alt="text"onClick={clickedListImg} />
                    <h4 id={props.currentList!=="Tasks"?"listsMenuTasksText":"listsMenuTasksTextBlue"}onClick={clickedListText}>{props.lists!==null?props.lists.value[0].displayName:"loading lists"}</h4>
                </div>
                <div id="listsMenuMyListsBigDiv">
                    {props.lists!==null?props.lists.value.map((value,index)=>{if(index>0){return(<div className={props.currentList!==value.displayName?"myListsDiv":"myListsDivDark"}key={index+0.5}onClick={clickedListDiv}><img className={props.currentList!==value.displayName?"myListsImages":"myListsImagesDark"}src="https://image.shutterstock.com/image-vector/modern-flat-sliders-icon-symbol-600w-2108399819.jpg"alt="list"onClick={clickedListImg} /><h4 className={props.currentList!==value.displayName?"myListsText":"myListsTextBlue"}onClick={clickedListText}key={index}>{value.displayName}</h4></div>);}}):"loading..."}
                    <div id="listsMenuNewListDiv">
                        <img id="listsMenuNewListImage"src="https://image.shutterstock.com/image-vector/colored-plus-symbol-cross-icon-600w-494267107.jpg"alt="text" />
                        <form onSubmit={e=>{e.preventDefault();createList(newList);setNewList('');}}>
                            <input id="listsMenuNewInput"type="text"placeholder="New list"onChange={event=>setNewList(event.target.value)}value={newList} />
                        </form>
                    </div>
                    <div id="lowMenuIconsDiv">
                        <img id="lowMenuMail"className="lowMenuIcons"src="https://image.shutterstock.com/image-vector/email-web-icon-vector-design-600w-410977486.jpg"alt="email icon" />
                        <img id="lowMenuCalandar"src="https://image.shutterstock.com/image-illustration/calendar-icon-line-symbol-isolated-600w-1072208258.jpg"alt="calandar icon" />
                        <img id="lowMenuPeople"className="lowMenuIcons"src="https://image.shutterstock.com/image-vector/group-icon-team-symbol-social-600w-1506361112.jpg"alt="people icon" />
                        <img id="lowMenuFiles"className="lowMenuIcons"src="https://image.shutterstock.com/image-vector/clip-web-icon-vector-design-600w-413873332.jpg"alt="files icon" />
                    </div>
                    <div>
                        <img className="apiButtons"src="https://image.shutterstock.com/image-vector/google-docs-app-icon-vector-600w-1844051089.jpg"alt="api choices" />
                        <img id="myAppButton"src="https://image.shutterstock.com/image-vector/silhouette-horses-running-blue-background-600w-704541676.jpg"alt="api choices" />
                        <img className="apiButtons"src="https://image.shutterstock.com/image-vector/check-mark-icon-vector-illustration-600w-1740969311.jpg"alt="api choices" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export{ListsMenu};