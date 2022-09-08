import"./dynamicLists.css";
import{graphConfig,loginRequest}from"../../../../authConfig.js";
import{callMsGraphForListTasks}from"../../../../graph.js";
import{useMsal}from"@azure/msal-react";

const DynamicLists=props=>{

    const findListByName=name=>props.lists.value.find(value=>value.displayName===name);

    const findListIdByName=name=>findListByName(name).id;

    const{instance:instance2,accounts}=useMsal();    

    const clickedListDiv=event=>{
        let thisText=event.target.children[1].textContent;
        props.setCurrentList(thisText);
        
        console.log(props.lists);
        graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(thisText)+"/tasks";  
        const request={
            ...loginRequest,
            account:accounts[0]
        };
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
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response.value));
            });
        });
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
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response.value));
            });
        });

        event.stopPropagation();
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
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response.value));
            });
        });

        event.stopPropagation();
    };

    return(
        <>
            {props.lists!==null?props.lists.value.map((value,index)=>{if(index>0){return(<div className={props.currentList!==value.displayName?"myListsDiv":"myListsDivDark"}key={index+0.5}onClick={clickedListDiv}><img className={props.currentList!==value.displayName?"myListsImages":"myListsImagesDark"}src="https://image.shutterstock.com/image-vector/modern-flat-sliders-icon-symbol-600w-2108399819.jpg"alt="list"onClick={clickedListImg} /><h4 className={props.currentList!==value.displayName?"myListsText":"myListsTextBlue"}onClick={clickedListText}key={index}>{value.displayName}</h4></div>);}}):"loading..."}
        </>
    );
};
export{DynamicLists};