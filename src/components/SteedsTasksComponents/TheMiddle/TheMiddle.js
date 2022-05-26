import "./theMiddle.css";
import react from"react";
import{useMsal}from"@azure/msal-react";
import{loginRequest,graphConfig}from"../../../authConfig.js";
import{callMsGraphForUser,callMsGraphForPhoto,callMsGraphForLists,callMsGraphForCreateList,callMsGraphForListTasks}from"../../../graph.js";


const TheMiddle=()=>{
    const[settingsMenuXhovered,setSettingsMenuXhovered]=react.useState(false);
    const[setting1on,setSetting1on]=react.useState(false);
    const[setting2on,setSetting2on]=react.useState(false);
    const[setting3on,setSetting3on]=react.useState(false);
    const[setting4on,setSetting4on]=react.useState(false);
    const[setting5on,setSetting5on]=react.useState(false);
    const[setting6on,setSetting6on]=react.useState(false);
    const[setting7on,setSetting7on]=react.useState(false);
    const[setting8on,setSetting8on]=react.useState(false);
    const[setting9on,setSetting9on]=react.useState(false);
    const[setting10on,setSetting10on]=react.useState(false);
    const[setting11on,setSetting11on]=react.useState(false);
    const[setting12on,setSetting12on]=react.useState(false);
    const[setting13on,setSetting13on]=react.useState(false);
    const[setting14on,setSetting14on]=react.useState(false);
    const[setting15on,setSetting15on]=react.useState(false);
    const[setting1hovered,setSetting1hovered]=react.useState(false);
    const[setting2hovered,setSetting2hovered]=react.useState(false);
    const[setting3hovered,setSetting3hovered]=react.useState(false);
    const[setting4hovered,setSetting4hovered]=react.useState(false);
    const[setting5hovered,setSetting5hovered]=react.useState(false);
    const[setting6hovered,setSetting6hovered]=react.useState(false);
    const[setting7hovered,setSetting7hovered]=react.useState(false);
    const[setting8hovered,setSetting8hovered]=react.useState(false);
    const[setting9hovered,setSetting9hovered]=react.useState(false);
    const[setting10hovered,setSetting10hovered]=react.useState(false);
    const[setting11hovered,setSetting11hovered]=react.useState(false);
    const[setting12hovered,setSetting12hovered]=react.useState(false);
    const[setting13hovered,setSetting13hovered]=react.useState(false);
    const[setting14hovered,setSetting14hovered]=react.useState(false);
    const[setting15hovered,setSetting15hovered]=react.useState(false);
    const[hoverId1,setHoverId1]=react.useState('');
    const[hoverId2,setHoverId2]=react.useState('');
    const[hoverId3,setHoverId3]=react.useState('');
    const[hoverId4,setHoverId4]=react.useState('');
    const[hoverId5,setHoverId5]=react.useState('');
    const[hoverId6,setHoverId6]=react.useState('');
    const[hoverId7,setHoverId7]=react.useState('');
    const[hoverId8,setHoverId8]=react.useState('');
    const[hoverId9,setHoverId9]=react.useState('');
    const[hoverId10,setHoverId10]=react.useState('');
    const[hoverId11,setHoverId11]=react.useState('');
    const[hoverId12,setHoverId12]=react.useState('');
    const[hoverId13,setHoverId13]=react.useState('');
    const[hoverId14,setHoverId14]=react.useState('');
    const[hoverId15,setHoverId15]=react.useState('');
    const[listsMenuClicked,setListsMenuClicked]=react.useState(true);
    const[sortHovered,setSortHovered]=react.useState(false);
    const[shareHovered,setShareHovered]=react.useState(false);
    const[screenWidth,setScreenWidth]=react.useState(window.innerWidth);
    const[listsMenuId,setListsMenuId]=react.useState("listsMenu");
    const[createTaskInputFocused,setCreateTaskInputFocused]=react.useState(false);

    react.useEffect(()=>{
        if(setting1hovered===true){
            switch(setting1on){
                case true:{
                    setHoverId1("toggle-on");
                    break;
                }
                case false:{
                    setHoverId1("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId1('');
                    break;
                }
            }
        }
        if(setting2hovered===true){
            switch(setting2on){
                case true:{
                    setHoverId2("toggle-on");
                    break;
                }
                case false:{
                    setHoverId2("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId2('');
                    break;
                }
            }
        }
        if(setting3hovered===true){
            switch(setting3on){
                case true:{
                    setHoverId3("toggle-on");
                    break;
                }
                case false:{
                    setHoverId3("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId3('');
                    break;
                }
            }
        }
        if(setting4hovered===true){
            switch(setting4on){
                case true:{
                    setHoverId4("toggle-on");
                    break;
                }
                case false:{
                    setHoverId4("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId4('');
                    break;
                }
            }
        }
        if(setting5hovered===true){
            switch(setting5on){
                case true:{
                    setHoverId5("toggle-on");
                    break;
                }
                case false:{
                    setHoverId5("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId5('');
                    break;
                }
            }
        }
        if(setting6hovered===true){
            switch(setting6on){
                case true:{
                    setHoverId6("toggle-on");
                    break;
                }
                case false:{
                    setHoverId6("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId6('');
                    break;
                }
            }
        }
        if(setting7hovered===true){
            switch(setting7on){
                case true:{
                    setHoverId7("toggle-on");
                    break;
                }
                case false:{
                    setHoverId7("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId7('');
                    break;
                }
            }
        }
        if(setting8hovered===true){
            switch(setting8on){
                case true:{
                    setHoverId8("toggle-on");
                    break;
                }
                case false:{
                    setHoverId8("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId8('');
                    break;
                }
            }
        }
        if(setting9hovered===true){
            switch(setting9on){
                case true:{
                    setHoverId9("toggle-on");
                    break;
                }
                case false:{
                    setHoverId9("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId9('');
                    break;
                }
            }
        }
        if(setting10hovered===true){
            switch(setting10on){
                case true:{
                    setHoverId10("toggle-on");
                    break;
                }
                case false:{
                    setHoverId10("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId10('');
                    break;
                }
            }
        }
        if(setting11hovered===true){
            switch(setting11on){
                case true:{
                    setHoverId11("toggle-on");
                    break;
                }
                case false:{
                    setHoverId11("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId11('');
                    break;
                }
            }
        }
        if(setting12hovered===true){
            switch(setting12on){
                case true:{
                    setHoverId12("toggle-on");
                    break;
                }
                case false:{
                    setHoverId12("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId12('');
                    break;
                }
            }
        }
        if(setting13hovered===true){
            switch(setting13on){
                case true:{
                    setHoverId13("toggle-on");
                    break;
                }
                case false:{
                    setHoverId13("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId13('');
                    break;
                }
            }
        }
        if(setting14hovered===true){
            switch(setting14on){
                case true:{
                    setHoverId14("toggle-on");
                    break;
                }
                case false:{
                    setHoverId14("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId14('');
                    break;
                }
            }
        }
        if(setting15hovered===true){
            switch(setting15on){
                case true:{
                    setHoverId15("toggle-on");
                    break;
                }
                case false:{
                    setHoverId15("darkToggle-on");
                    break;
                }
                default:{
                    setHoverId15('');
                    break;
                }
            }
        }

        if(setting1hovered===false&&setting2hovered===false&&setting3hovered===false&&setting4hovered===false&&setting5hovered===false&&setting6hovered===false&&setting7hovered===false&&setting8hovered===false&&setting9hovered===false&&setting10hovered===false&&setting11hovered===false&&setting12hovered===false&&setting13hovered===false&&setting14hovered===false&&setting15hovered===false){
            setHoverId1('');
            setHoverId2('');
            setHoverId3('');
            setHoverId4('');
            setHoverId5('');
            setHoverId6('');
            setHoverId7('');
            setHoverId8('');
            setHoverId9('');
            setHoverId10('');
            setHoverId11('');
            setHoverId12('');
            setHoverId13('');
            setHoverId14('');
            setHoverId15('');
            
        }
    },[setting1hovered,setting2hovered,setting3hovered,setting4hovered,setting5hovered,setting6hovered,setting7hovered,setting8hovered,setting9hovered,setting10hovered,setting11hovered,setting12hovered,setting13hovered,setting14hovered,setting15hovered]);

    // const decideToggleClass=(settingIsOn)=>{
    //     if(settingIsOn===true){
    //         return"toggle";
    //     }
    //     else{
    //         return"darkToggle";
    //     }
    // }

    react.useEffect(()=>{
        if(listsMenuClicked===true){
            setListsMenuId("listsMenu");
        }
        else{
            setListsMenuId("hideListsMenu");
        }
    },[listsMenuClicked]);

    const checkWindowSize=()=>{
        if(window.innerWidth<screenWidth){
            setListsMenuId("hideListsMenu");
            setListsMenuClicked(false);
            setScreenWidth(window.innerWidth);
        }
        else{
            setScreenWidth(window.innerWidth);
        }
    }
    
    window.onresize=checkWindowSize;

    const createTaskInputDecideClass=listsMenuClicked=>{
        if(listsMenuClicked===true&&createTaskInputFocused===false){
            return"createTaskInput";
        }
        if(listsMenuClicked===true&&createTaskInputFocused===true){
            return"focusedCreateTaskInput";
        }
        if(listsMenuClicked===false&&createTaskInputFocused===false){
            return"wideCreateTaskInput";
        }
        if(listsMenuClicked===false&&createTaskInputFocused===true){
            return"focusedWideCreateTaskInput";
        }
    }

    const createTaskDecideClass=(listsMenuClicked,createTaskInputFocused)=>{
        if(listsMenuClicked===true&&createTaskInputFocused===false){
            return"createTask";
        }
        if(listsMenuClicked===true&&createTaskInputFocused===true){
            return"tallCreateTask";
        }
        if(listsMenuClicked===false&&createTaskInputFocused===false){
            return"wideCreateTask";
        }
        if(listsMenuClicked===false&&createTaskInputFocused===true){
            return"tallWideCreateTask";
        }
    }

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let theDate=`${year}/${month<10?`0${month}`:`${month}`}/${date}`;

    function handleLogout(instance) {
        instance.logoutRedirect().catch(e => {
            console.error(e);
        });
    }
    
    const { instance } = useMsal();
    const{instance:instance2,accounts}=useMsal();
    const[graphData,setGraphData]=react.useState(null);
    const[photo,setPhoto]=react.useState(null);
    const name=accounts[0]&&accounts[0].name;

    const[lists,setLists]=react.useState(null);

    const getLists=()=>{
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForLists(response.accessToken).then(response=>{
                setLists(response);
            });
        }).catch(e=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForLists(response.accessToken).then(response=>{
                    setLists(response);
                });
            });
        });
    };

    react.useEffect(()=>{
        getLists();
    },[]);

    const[newList,setNewList]=react.useState('');

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
            .catch((err)=>console.log(err));
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForCreateList(response.accessToken,string)
                .then(()=>{
                    getLists();
                });
            });
        });
    };


    const findListByName=name=>lists.value.find(value=>value.displayName===name);
    const findListIdByName=name=>findListByName(name).id;

    const[currentListTasks,setCurrentListTasks]=react.useState(null);
    const[currentList,setCurrentList]=react.useState(null);
    
    const clickedList=event=>{
        let thisText=event.target.children[1].textContent;
        setCurrentList(thisText);
        graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(thisText)+"/tasks";  
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForListTasks(response.accessToken).then(response=>setCurrentListTasks(response));
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>setCurrentListTasks(response));
            });
        });
    }

    return(
        <main>
            <div id={listsMenuId}>
                <div id="listsMenuButtonDiv">
                    <img id="listsMenuButton"src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>setListsMenuClicked(!listsMenuClicked)} />
                </div>
                <div id="listsScrollDiv">
                    <div id="listsMenuDayDiv">
                        <img id="listsMenuDayImage"src="https://image.shutterstock.com/image-vector/sun-vector-icon-modern-design-600w-1415031134.jpg"alt="text" />
                        <h4 id="listsMenuDayText">My Day</h4>
                    </div>
                    <div id="listsMenuAssignedDiv">
                        <img id="listsMenuAssignedImage"src="https://image.shutterstock.com/image-vector/flat-portrait-black-man-icon-600w-2134341081.jpg"alt="text" />
                        <h4 id="listsMenuAssignedText">Assigned To Me</h4>
                    </div>
                    <div id="listsMenuFlaggedDiv">
                        <img id="listsMenuFlaggedImage"src="https://image.shutterstock.com/image-vector/line-icon-flag-600w-654361600.jpg"alt="text" />
                        <h4 id="listsMenuFlaggedText">Flagged email</h4>
                    </div>
                    <div id="listsMenuTasksDiv">
                        <img id="listsMenuTasksImage"src="https://image.shutterstock.com/image-vector/home-icon-trendy-flat-style-600w-675381382.jpg"alt="text" />
                        <h4 id="listsMenuTasksText">{lists!==null?lists.value[0].displayName:"loading lists"}</h4>
                    </div>
                    <div id="listsMenuMyListsBigDiv">
                        {lists!==null?lists.value.map((value,index)=>{if(index>0){return(<div className="myListsDiv"key={index+0.5}onClick={clickedList}><img className="myListsImages"src="https://image.shutterstock.com/image-vector/modern-flat-sliders-icon-symbol-600w-2108399819.jpg"alt="list" /><h4 className="myListsText"key={index}>{value.displayName}</h4></div>);}}):"loading..."}
                        <div id="listsMenuNewListDiv">
                            <img id="listsMenuNewListImage"src="https://image.shutterstock.com/image-vector/colored-plus-symbol-cross-icon-600w-494267107.jpg"alt="text" />
{/*Working here*/}
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
            <div id={listsMenuClicked===true?"centerPage":"wideCenterPage"}>
                <div id={listsMenuClicked===true?"leftTopCenterPage":"wideLeftTopCenterPage"}>
                    <img id={listsMenuClicked===true?"hideListsMenu":"centerPageMenuButton"}src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>setListsMenuClicked(!listsMenuClicked)} />
                    <h2 id="centerPageTitle">This List's Name</h2>
                    <img id="centerPageOptions"src="https://image.shutterstock.com/image-vector/instagram-menu-icon-vector-gradient-600w-442224592.jpg"alt="text" />
                </div>
                    <p id={listsMenuClicked===true?"date":"wideDate"}>{theDate}</p>
                <div id="rightTopCenterPage">
                    <img className={sortHovered===false?"centerPageRightIcons":"centerPageRightIconsDark"}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}src="https://image.shutterstock.com/image-vector/down-black-arrow-icon-600w-1646995147.jpg"alt="text" />
                    <h4 className={sortHovered===false?"centerPageRightWords":"centerPageRightWordsDark"}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}>Sort</h4>
                    <img className={shareHovered===false?"centerPageRightIcons":"centerPageRightIconsDark"}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}src="https://image.shutterstock.com/image-illustration/add-friends-icon-600w-1184815669.jpg"alt="text" />
                    <h4 className={shareHovered===false?"centerPageRightWords":"centerPageRightWordsDark"}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}>Share</h4>
                </div>
                <div className={createTaskDecideClass(listsMenuClicked,createTaskInputFocused)}>
                    <img id={createTaskInputFocused===false?"createTaskPlus":"hideProfMenu"}src="https://image.shutterstock.com/image-vector/colored-plus-symbol-cross-icon-600w-494267107.jpg"alt="text" />
                    <img id={createTaskInputFocused===false?"hideProfMenu":"createTaskCircle"}src="https://image.shutterstock.com/image-photo/white-paper-texture-background-cardboard-600w-1384887293.jpg"alt="text" />
                    <input className={createTaskInputDecideClass(listsMenuClicked,createTaskInputFocused)}type="text"placeholder="Add a task"onFocus={()=>setCreateTaskInputFocused(true)}onBlur={()=>setCreateTaskInputFocused(false)} />
                    <div id={createTaskInputFocused===false?"hideProfMenu":"createTaskIconsDiv"}>
                        <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/black-calendar-icon-design-vector-600w-1818197549.jpg"alt="text" />
                        <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/bell-icon-design-600w-1250740630.jpg"alt="text" />
                        <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/update-organizer-vector-icon-style-600w-338278388.jpg"alt="text" />
                    </div>
                    <h5 id={createTaskInputFocused===false?"hideProfMenu":"add"}>Add</h5>
                </div>
            </div>
        </main>
    );
}
export{TheMiddle};
