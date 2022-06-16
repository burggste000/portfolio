import "./theMiddle.css";
import{TaskListItem}from"./TaskListItem.jsx";
import{CompletedTasks}from"./CompletedTasks.jsx";
import react from"react";

const TheMiddle=props=>{
    const[sortHovered,setSortHovered]=react.useState(false);
    const[shareHovered,setShareHovered]=react.useState(false);
    const[suggestionsHovered,setSuggestionsHovered]=react.useState(false);
    const[createTaskInputFocused,setCreateTaskInputFocused]=react.useState(false);
    const[completedTasks,setCompletedTasks]=react.useState(true);
    const[showCompletedTasks,setShowCompletedTasks]=react.useState(false);
    const[centerPageOptions,setCenterPageOptions]=react.useState(false);
    const[printHovered,setPrintHovered]=react.useState(false);
    const[showCompletedTasksHovered,setShowCompletedTasksHovered]=react.useState(false);

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

    const centerPageOptionsMenuClass=()=>{
        if(centerPageOptions===false){
            return"hide";
        }
        else{
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
        }
    };

    const optionsCompletedShowDiv=()=>{
        if(props.currentList==="Assigned To Me"||props.currentList==="Flagged email"&&showCompletedTasksHovered===false){
            return"showCompletedTasksDiv";
        }
        else{
            return"hide";
        }
    };

    return(
        <>
            <div id={props.listsMenuClicked===true?"leftTopCenterPage":"wideLeftTopCenterPage"}>
                <img id={props.listsMenuClicked===true?"hide":"centerPageMenuButton"}src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>props.setListsMenuClicked(!props.listsMenuClicked)} />
                <h2 id="centerPageTitle">{props.currentList}</h2>
                <img id="centerPageOptions"onClick={()=>setCenterPageOptions(!centerPageOptions)}src="https://image.shutterstock.com/image-vector/instagram-menu-icon-vector-gradient-600w-442224592.jpg"alt="text" />
            </div>
            <div id={centerPageOptionsMenuClass()}>
                <div id="listOptionsDiv">
                    <h4 id="listOptionsText">{props.currentList==="Assigned To Me"||props.currentList==="Flagged email"?"Options":"List options"}</h4>
                </div>
{/*Working here*/}
                <div id={optionsCompletedShowDiv()}onMouseEnter={()=>setShowCompletedTasksHovered(true)}onMouseLeave={()=>setShowCompletedTasksHovered(false)}>
                    <img id="completedIcon"src="https://image.shutterstock.com/image-vector/checkmark-vector-icon-600w-556878373.jpg"alt="marked as completed task" />
                    <p id="showCompletedText">Show completed tasks</p>
                </div>
                <div id={printHovered===false?"printListDiv":"darkPrintListDiv"}onMouseEnter={()=>setPrintHovered(true)}onMouseLeave={()=>setPrintHovered(false)}>
                    <img id={printHovered===false?"printIcon":"darkPrintIcon"}src="https://image.shutterstock.com/image-vector/printer-icon-vector-design-illustration-600w-1492370306.jpg"alt="print icon" />
                    <p id="printListText">Print list</p>
                </div>
            </div>
            <p id={dateId()}>{theDate}</p>
            <div id="rightTopCenterPage">
                <img className={sortButtonImgClass()}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}src="https://image.shutterstock.com/image-vector/down-black-arrow-icon-600w-1646995147.jpg"alt="text" />
                <h4 className={sortButtonTextClass()}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}>Sort</h4>
                <img className={shareButtonImgClass()}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}src="https://image.shutterstock.com/image-illustration/add-friends-icon-600w-1184815669.jpg"alt="text" />
                <h4 className={shareButtonTextClass()}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}>Share</h4>
                <img className={suggestionsButtonImgClass()}onMouseEnter={()=>setSuggestionsHovered(true)}onMouseLeave={()=>setSuggestionsHovered(false)}src="https://image.shutterstock.com/image-vector/idea-line-icon-600w-1033780723.jpg"alt="tips" />
                <h4 className={suggestionsButtonTextClass()}onMouseEnter={()=>setSuggestionsHovered(true)}onMouseLeave={()=>setSuggestionsHovered(false)}>Suggestions</h4>
            </div>
            <div className={createTaskDecideClass()}>
                <img id={createTaskInputFocused===false?"createTaskPlus":"hide"}src="https://image.shutterstock.com/image-vector/colored-plus-symbol-cross-icon-600w-494267107.jpg"alt="text" />
                <img id={createTaskInputFocused===false?"hide":"createTaskCircle"}src="https://image.shutterstock.com/image-photo/white-paper-texture-background-cardboard-600w-1384887293.jpg"alt="text" />
                <input className={createTaskInputDecideClass()}type="text"placeholder="Add a task"onFocus={()=>setCreateTaskInputFocused(true)}onBlur={()=>setCreateTaskInputFocused(false)} />
                <div id={createTaskInputFocused===false?"hideProfMenu":"createTaskIconsDiv"}>
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/black-calendar-icon-design-vector-600w-1818197549.jpg"alt="text" />
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/bell-icon-design-600w-1250740630.jpg"alt="text" />
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/update-organizer-vector-icon-style-600w-338278388.jpg"alt="text" />
                </div>
                <h5 id={createTaskInputFocused===false?"hideProfMenu":"add"}>Add</h5>
            </div>
            {props.currentListTasks!==null&&props.currentListTasks.length>0?
                <div className={tasksParentDivDecideClass()}>
                    <div>
                        {props.currentListTasks!==null?props.currentListTasks.map((value,index)=>{if(value.status!=="completed"){return<TaskListItem value={value}index={index} />}}):''}
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