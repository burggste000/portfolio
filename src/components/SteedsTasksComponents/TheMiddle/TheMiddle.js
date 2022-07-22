import "./theMiddle.css";
import{TaskListItem}from"./TaskListItem/TaskListItem.jsx";
import{CompletedTasks}from"./CompletedTasks/CompletedTasks.jsx";
import{loginRequest,graphConfig}from"../../../authConfig.js";
import{callMsGraphForListTasks,callMsGraphForCreateTask}from"../../../graph.js";
import react from"react";
import{useMsal}from"@azure/msal-react";


const TheMiddle=props=>{
    const[sortHovered,setSortHovered]=react.useState(false);
    const[shareHovered,setShareHovered]=react.useState(false);
    const[suggestionsHovered,setSuggestionsHovered]=react.useState(false);
    const[createTaskInputFocused,setCreateTaskInputFocused]=react.useState(false);
    const[completedTasks,setCompletedTasks]=react.useState(true);
    const[showCompletedTasks,setShowCompletedTasks]=react.useState(false);
    const[newTask,setNewTask]=react.useState('');

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let theDate=`${year}/${month<10?`0${month}`:`${month}`}/${date}`;

    const dateId=()=>{
        if(props.currentList==="My Day"){
            if(props.listsMenuClicked===true){
                return"date";
            }
            else{
                return"wideDate";
            }
        }
        else{
            return"hide";
        }
    };

    const sortButtonImgClass=()=>{
        if(props.currentList!=="Assigned To Me"){
            if(sortHovered===false){
                return"centerPageRightIcons";
            }
            else{
                return"centerPageRightIconsDark";
            }
        }
        else{
            return"hide";
        }
    };
    
    const sortButtonTextClass=()=>{
        if(props.currentList!=="Assigned To Me"){
            if(sortHovered===false){
                return"centerPageRightWords";
            }
            else{
                return"centerPageRightWordsDark";
            }

        }
        else{
            return"hide";
        }
    };

    const shareButtonImgClass=()=>{
        if(props.currentList==="My Day"||props.currentList==="Flagged email"||props.currentList==="Tasks"){
            return"hide";
        }
        if(props.currentList!=="Assigned To Me"){
            if(shareHovered===false){
                return"centerPageRightIcons";
            }
            else{
                return"centerPageRightIconsDark";
            }
        }
        else{
            return"hide";
        }
    };

    const shareButtonTextClass=()=>{
        if(props.currentList==="My Day"||props.currentList==="Flagged email"||props.currentList==="Tasks"){
            return"hide";
        }
        if(props.currentList!=="Assigned To Me"){
            if(shareHovered===false){
                return"centerPageRightWords";
            }
            else{
                return"centerPageRightWordsDark";
            }
        }
        else{
            return"hide";
        }
    };
    
    const suggestionsButtonImgClass=()=>{
        if(props.currentList!=="My Day"){
            return"hide";
        }
        else{
            if(suggestionsHovered===false){
                return"centerPageRightIcons";
            }
            else{
                return"centerPageRightIconsDark";
            }
        }
    };

    const suggestionsButtonTextClass=()=>{
        if(props.currentList!=="My Day"){
            return"hide";
        }
        else{
            if(suggestionsHovered===false){
                return"centerPageRightWords";
            }
            else{
                return"centerPageRightWordsDark";
            }
        }
    };

    const createTaskInputDecideClass=()=>{
        if(props.listsMenuClicked===true&&createTaskInputFocused===false){
            return"createTaskInput";
        }
        if(props.listsMenuClicked===true&&createTaskInputFocused===true){
            return"focusedCreateTaskInput";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===false){
            return"wideCreateTaskInput";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===true){
            return"focusedWideCreateTaskInput";
        }
    };

    const createTaskDecideClass=()=>{
        if(props.currentList!=="Assigned To Me"){
            if(props.listsMenuClicked===true&&createTaskInputFocused===false){
                return"createTask";
            }
            if(props.listsMenuClicked===true&&createTaskInputFocused===true){
                return"tallCreateTask";
            }
            if(props.listsMenuClicked===false&&createTaskInputFocused===false){
                return"wideCreateTask";
            }
            if(props.listsMenuClicked===false&&createTaskInputFocused===true){
                return"tallWideCreateTask";
            }
        }
        else{
            return"hide";
        }
    };

    const tasksParentDivDecideClass=()=>{
        if(props.listsMenuClicked===true&&createTaskInputFocused===false){
            return"tasksParent";
        }
        if(props.listsMenuClicked===true&&createTaskInputFocused===true){
            return"tallTasksParent";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===false){
            return"wideTasksParent";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===true){
            return"tallWideTasksParent";
        }
    };
    const completedTasksDivClass=()=>{
        if(completedTasks===true){
            if(props.listsMenuClicked===true){
                return"completedDiv";
            }
            else{
                return"wideCompletedDiv";
            }
        }
        else{
            return"hide";
        }
    };

    const findListId=()=>{
        return props.lists.value.find(value=>value.displayName===props.currentList?value.id:'').id;
    };

    const findListByName=name=>props.lists.value.find(value=>value.displayName===name);

    const findListIdByName=name=>findListByName(name).id;

    const{instance:instance2,accounts}=useMsal();

    const createTask=string=>{
        graphConfig.graphMeCreateTaskEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListId()+"/tasks"
        const request={
            ...loginRequest,
            account:accounts[0]
        };
        instance2.acquireTokenSilent(request).then(response=>{
            callMsGraphForCreateTask(response.accessToken,string)
            .then(()=>{
                graphConfig.graphMeListTasksEndpoint="https://graph.microsoft.com/v1.0/me/todo/lists/"+findListIdByName(props.currentList)+"/tasks";  
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
                })
            .catch(err=>console.log(err));
        }).catch(()=>{
            instance2.acquireTokenPopup(request).then(response=>{
                callMsGraphForCreateTask(response.accessToken,string)
                .then(()=>{
                    console.log("The new task has been added.");
                });
            });
        });
    };

    return(
        <>
            <div id={props.listsMenuClicked===true?"leftTopCenterPage":"wideLeftTopCenterPage"}>
                <img id={props.listsMenuClicked===true?"hide":"centerPageMenuButton"}src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>props.setListsMenuClicked(!props.listsMenuClicked)} />
                <h2 id="centerPageTitle">{props.currentList}</h2>
                <img id="centerPageOptions"onClick={()=>props.setCenterPageOptions(!props.centerPageOptions)}src="https://image.shutterstock.com/image-vector/instagram-menu-icon-vector-gradient-600w-442224592.jpg"alt="close button" />
            </div>
            <p id={dateId()}>{theDate}</p>
            <div id={props.suggestionsClicked===false?"rightTopCenterPage":"movedRightTopCenterPage"}>
                <img className={sortButtonImgClass()}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}onClick={()=>props.setSortMenuClicked(!props.sortMenuClicked)}src="https://image.shutterstock.com/image-vector/down-black-arrow-icon-600w-1646995147.jpg"alt="text" />
                <h4 className={sortButtonTextClass()}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}onClick={()=>props.setSortMenuClicked(!props.sortMenuClicked)}>Sort</h4>
                <img className={shareButtonImgClass()}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}src="https://image.shutterstock.com/image-illustration/add-friends-icon-600w-1184815669.jpg"alt="text" />
                <h4 className={shareButtonTextClass()}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}>Share</h4>
                <img className={suggestionsButtonImgClass()}onMouseEnter={()=>setSuggestionsHovered(true)}onMouseLeave={()=>setSuggestionsHovered(false)}onClick={()=>props.setSuggestionsClicked(!props.suggestionsClicked)}src="https://image.shutterstock.com/image-vector/idea-line-icon-600w-1033780723.jpg"alt="tips" />
                <h4 className={suggestionsButtonTextClass()}onMouseEnter={()=>setSuggestionsHovered(true)}onMouseLeave={()=>setSuggestionsHovered(false)}onClick={()=>props.setSuggestionsClicked(!props.suggestionsClicked)}>Suggestions</h4>
            </div>
            <div className={createTaskDecideClass()}>
                <img id={createTaskInputFocused===false?"createTaskPlus":"hide"}src="https://image.shutterstock.com/image-vector/colored-plus-symbol-cross-icon-600w-494267107.jpg"alt="text" />
                <img id={createTaskInputFocused===false?"hide":"createTaskCircle"}src="https://image.shutterstock.com/image-photo/white-paper-texture-background-cardboard-600w-1384887293.jpg"alt="text" />
{/*Working here*/}
                <form id="createTaskForm"onSubmit={event=>{event.preventDefault();createTask(newTask);setNewTask('');}}>
                    <input className={createTaskInputDecideClass()}type="text"placeholder="Add a task"onFocus={()=>setCreateTaskInputFocused(true)}onBlur={()=>setCreateTaskInputFocused(false)}onChange={event=>setNewTask(event.target.value)}value={newTask} />
                </form>
                <div id={createTaskInputFocused===false?"hideProfMenu":"createTaskIconsDiv"}>
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/black-calendar-icon-design-vector-600w-1818197549.jpg"alt="calandar" />
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/bell-icon-design-600w-1250740630.jpg"alt="bell" />
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/update-organizer-vector-icon-style-600w-338278388.jpg"alt="calandar" />
                </div>
                <h5 id={createTaskInputFocused===false?"hideProfMenu":"add"}>Add</h5>
            </div>
            {props.currentListTasks!==null&&props.currentListTasks.length>0?
                <div className={tasksParentDivDecideClass()}>
                    <div>
{/*Working here*/}
                        {props.currentListTasks!==null?props.currentListTasks.map((value,index)=>{if(value.status!=="completed"){return<TaskListItem value={value}index={index}key={index+0.5} />}}):''}
                    </div>
                    <div className={completedTasksDivClass()}onClick={()=>setShowCompletedTasks(!showCompletedTasks)}>
                        <img id={showCompletedTasks===false?"completedArrow":"hide"}onClick={()=>setShowCompletedTasks(true)}src="https://image.shutterstock.com/image-vector/arrow-icon-trendy-flat-style-600w-747358468.jpg"alt="right arrow" />
                        <img id={showCompletedTasks===true?"completedArrow":"hide"}onClick={()=>setShowCompletedTasks(false)}src="https://image.shutterstock.com/image-vector/arrow-icon-vector-on-white-600w-1638136570.jpg"alt="down arrow" />
                        <h4 id="completedText">Completed</h4>
                        <p id="completedNumber">{props.completedNumber}</p>
                    </div>
                    <div id="completedTasks">
                        {props.currentListTasks!==null&&showCompletedTasks===true?props.currentListTasks.map((value,index)=>{if(value.status==="completed"){return<CompletedTasks value={value}index={index} />}}):''}
                    </div>
                </div>:''
            }
        </>
    );
};
export{TheMiddle};