import"./taskListItem.css";
import react from"react";
import{graphConfig,loginRequest}from"../../../../authConfig.js";
import{callMsGraphForCompleteTask}from"../../../../graph.js";
import{useMsal}from"@azure/msal-react";

const TaskListItem=props=>{
    const[taskHoveredCircle,setTaskHoveredCircle]=react.useState(false);
    const[starClicked,setStarClicked]=react.useState(false);

{/*Working here*/}
    const findListByName=name=>props.lists.value.find(value=>value.displayName===name);

    const findListIdByName=name=>findListByName(name).id;

    const{instance:instance2,accounts}=useMsal();    

    const taskComplete=event=>{
        let clickedTask=event.target.nextElementSibling.textContent;
        let clickedTaskIndex=props.currentListTasks.findIndex(element=>element.title===clickedTask);
        let clickedTaskId=props.currentListTasks[clickedTaskIndex].id;
        graphConfig.graphMeCompleteTaskEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(props.currentList)+"/tasks/"+clickedTaskId;
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForCompleteTask(response.accessToken).then(response=>{
                console.log("entered .then");
            });
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForCompleteTask(response.accessToken).then(response=>{
                    console.log("entered .then");
                });
            });
        });
    };

    return(
        <div className="taskDiv"key={props.index+0.5}>
            <img id={taskHoveredCircle===false?"completeTaskCircle":"hide"}onMouseEnter={()=>setTaskHoveredCircle(true)}onMouseLeave={()=>setTaskHoveredCircle(false)}src="https://image.shutterstock.com/image-photo/white-paper-texture-background-cardboard-600w-1384887293.jpg"alt="text" />
{/*Working here*/}
            <img id={taskHoveredCircle===true?"completeTaskCircle":"hide"}onMouseEnter={()=>setTaskHoveredCircle(true)}onMouseLeave={()=>setTaskHoveredCircle(false)}src="https://image.shutterstock.com/image-vector/tick-isolated-on-white-background-600w-1913803054.jpg"alt="checkmark"onClick={taskComplete} />
            <p className="taskText">{props.value.title}</p>
            <img id={starClicked===false?"importantStar":"hide"}onClick={()=>setStarClicked(true)}src="https://image.shutterstock.com/image-vector/star-vector-icon-600w-1155631591.jpg"alt="star" />
            <img id={starClicked===true?"importantStarBlue":"hide"}onClick={()=>setStarClicked(false)}src="https://image.shutterstock.com/image-vector/blue-vector-star-600w-389172595.jpg"alt="blue star" />
        </div>
    );
};
export{TaskListItem};