// import{graphConfig,loginRequest}from "../../../../authConfig.js";
import"./completedTasks.css";
import react from"react";
// import{useMsal}from"@azure/msal-react";
// import{callMsGraphForIncompleteTask,callMsGraphForListTasks}from"../../../../graph.js";

const CompletedTasks=props=>{
    const[starClicked,setStarClicked]=react.useState(false);

    // const findListByName=name=>props.lists.value.find(value=>value.displayName===name);

    // const findListIdByName=name=>findListByName(name).id;

    // const{instance:instance2,accounts}=useMsal();    
// This is a function for the onClick of the circle image.
    // const taskIncomplete=event=>{    
    //     let clickedTask=event.target.nextElementSibling.textContent;

        //Why is props.currentListTasks undefined in this file, but in TaskListItem.jsx it isn't undefined?

    //     let clickedTaskIndex=props.currentListTasks.findIndex(element=>element.title===clickedTask);
    //     let clickedTaskId=props.currentListTasks[clickedTaskIndex].id;
    //     graphConfig.graphMeIncompleteTaskEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(props.currentList)+"/tasks/"+clickedTaskId;
    //     const request={
    //         ...loginRequest,
    //         account:accounts[0]
    //     };
    //     instance2.acquireTokenSilent(request).then(response=>{
    //         callMsGraphForIncompleteTask(response.accessToken).then(()=>{
    //         }).then(()=>{
    //             instance2.acquireTokenSilent(request).then(response=>{
    //                 callMsGraphForListTasks(response.accessToken).then(response=>{
    //                     let thisResponse=response.value;
    //                     props.setCurrentListTasks(thisResponse);
    //                 });
    //             });
    //         });
    //     }).catch(()=>{
    //         instance2.acquireTokenPopup(request).then(response=>{
    //             callMsGraphForIncompleteTask(response.accessToken).then(()=>{
    //             });
    //         });
    //     });
    // };

    return(
        <div className="taskDiv"key={props.index+0.5}>
            <img id="completeTaskCircle"src="https://image.shutterstock.com/image-vector/blue-verified-check-mark-icon-600w-1971321881.jpg"alt="marked as completed task" />
            <p className="completedTaskText">{props.value.title}</p>
            <img id={starClicked===false?"importantStar":"hide"}onClick={()=>setStarClicked(true)}src="https://image.shutterstock.com/image-vector/star-vector-icon-600w-1155631591.jpg"alt="star" />
            <img id={starClicked===true?"importantStarBlue":"hide"}onClick={()=>setStarClicked(false)}src="https://image.shutterstock.com/image-vector/blue-vector-star-600w-389172595.jpg"alt="blue star" />
        </div>
    );
};
export{CompletedTasks};