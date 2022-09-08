import"./listsMenu.css";
import react from"react";
import{loginRequest,graphConfig}from"../../../authConfig.js";
import{callMsGraphForLists,callMsGraphForCreateList,callMsGraphForListTasks}from"../../../graph.js";
import{StaticLists}from"./StaticLists/StaticLists.jsx";
import{DynamicLists}from"./DynamicLists/DynamicLists.jsx";
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
    
    const{instance:instance2,accounts}=useMsal();    
    
    const getLists=()=>{
        let tasksListId;
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForLists(response.accessToken).then(response=>{
                props.setCurrentList(newList);
                props.setLists(response);
                props.setCurrentListTasks('');
                tasksListId=response.value[0].id;
                graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+tasksListId+"/tasks";
            })
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForLists(response.accessToken).then(response=>{
                    props.setLists(response);
                });
            });
        });
    };


    const getListsWhenPageLoads=()=>{
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

    react.useEffect(()=>{
        getListsWhenPageLoads();
    },[]);

    return(
        <div id={props.listsMenuClicked===false?"hideListsMenu":listsMenuId}>
            <div id="listsMenuButtonDiv">
                <img id="listsMenuButton"src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>props.setListsMenuClicked(!props.listsMenuClicked)} />
            </div>
            <div id="listsScrollDiv">
                <StaticLists currentList={props.currentList}setCurrentList={props.setCurrentList}lists={props.lists}setCurrentListTasks={props.setCurrentListTasks} />
                <div id="listsMenuMyListsBigDiv">
                    <DynamicLists lists={props.lists}currentList={props.currentList}setCurrentList={props.setCurrentList}setCurrentListTasks={props.setCurrentListTasks}currentListTasks={props.currentListTasks} />
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
                </div>
            </div>
        </div>
    );
};
export{ListsMenu};