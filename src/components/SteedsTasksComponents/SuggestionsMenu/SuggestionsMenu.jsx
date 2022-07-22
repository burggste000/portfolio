import"./suggestionsMenu.css";
import{callMsGraphForListTasks}from"../../../graph.js";
import{graphConfig,loginRequest}from"../../../authConfig.js";
import{useMsal}from"@azure/msal-react";
import react from"react";

const SuggestionsMenu=props=>{
    const[suggestionsMenuXhovered,setSuggestionsMenuXhovered]=react.useState(false);

    //Make a function that will get all the tasks from those lists.

    // const collectListNames=()=>{
    //     let nameArr=[];
    //     let list=document.getElementById("listsMenu").children[1].children[4].children;
    //     for(let i=0;i<(list.length-3);++i){
            //I had to put -3 in the conditional for this loop to remove blank indexes
    //         nameArr.push(document.getElementById("listsMenu").children[1].children[4].children[i].innerText);
    //     }
    //     return nameArr;
    // };

    // const findListByName=name=>props.lists.value.find(value=>value.displayName===name);

    // const findListIdByName=name=>findListByName(name).id;

    // const{instance:instance2,accounts}=useMsal();

    // const getListTasks=()=>{
    //     let listsNamesArr=collectListNames();
    //     for(let i=0;i<listsNamesArr.length;++i){
    //         graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(listsNamesArr[i])+"/tasks";  

    //         const request={
    //             ...loginRequest,
    //             account:accounts[0]
    //         };
    //         instance2.acquireTokenSilent(request).then(response=>{
    //             callMsGraphForListTasks(response.accessToken).then(response=>{
    //                 props.setCurrentListTasks(response.value);
    //                 console.log(props.currentListTasks);
    //                 let count=0;
    //                 for(let i=0;i<props.currentListTasks.length;++i){
    //                     if(props.currentListTasks[i].status==="completed"){
    //                         ++count;
    //                     }
    //                 }
    //                 props.setCompletedNumber(count);
    //             });
    //         }).catch(()=>{
    //             instance2.acquireTokenPopup(request).then(response=>{
    //                 callMsGraphForListTasks(response.accessToken).then(response=>props.setCurrentListTasks(response));
    //             });
    //         });
    //     }
    // };

//Put a break point in this, to see what is happening when it is called. Why isn't the console printing "hit hook"?
    // react.useEffect(()=>{
    //     if(props.suggestionsClicked===true){
    //         getListTasks();
    //         console.log("hit hook");
    //     }
    // },[props.suggestionsClicked]);

    return(
        <div id={props.suggestionsClicked===false?"hide":"suggestionsParentDiv"}>
                <h2 id="SuggestionsTitle">Suggestions</h2>
            <div id="suggestionsXdiv"onMouseEnter={()=>setSuggestionsMenuXhovered(true)}onMouseLeave={()=>setSuggestionsMenuXhovered(false)}>
                <img id={suggestionsMenuXhovered===false?"suggestionsX":"darkSuggestionsX"}onClick={()=>props.setSuggestionsClicked(false)}src="https://image.shutterstock.com/image-vector/cancel-cross-close-icon-vector-600w-294801173.jpg"alt="close button" />
            </div>
        </div>
    );
};
export{SuggestionsMenu};