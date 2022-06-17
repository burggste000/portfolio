import"./sortMenu.css";
import react from"react";

const SortMenu=props=>{
    const[importanceHovered,setImportanceHovered]=react.useState(false);
    const[dueDateHovered,setDueDateHovered]=react.useState(false);
    const[addedToMyDayHovered,setAddedToMyDayHovered]=react.useState(false);
    const[alphabeticallyHovered,setAlphabeticallyHovered]=react.useState(false);
    const[creationDateHovered,setCreationDateHovered]=react.useState(false);

    const myDaySortDivId=()=>{
        if(props.currentList==="My Day"){
            if(props.sortMenuClicked===false){
                return"hide";
            }
            else{
                return"myDaySortDiv";
            }
        }
        else{
            if(props.sortMenuClicked===false){
                return"hide";
            }
            else{
                return"largeSortDiv";
            }
        }
    };


    return(
        <div id={myDaySortDivId()}>
            <div id="sortByDiv">
                <h4 id="sortByText">Sort by</h4>
            </div>
            <div id="importanceDiv"onMouseEnter={()=>setImportanceHovered(true)}onMouseLeave={()=>setImportanceHovered(false)}>
                <img id={importanceHovered===false?"importanceIcon":"darkImportanceIcon"}src="https://image.shutterstock.com/image-vector/star-icon-outline-award-vector-600w-1892419942.jpg"alt="star icon" />
                <p id="importanceText">Importance</p>
            </div>
            <div id="dueDateDiv"onMouseEnter={()=>setDueDateHovered(true)}onMouseLeave={()=>setDueDateHovered(false)}>
                <img id={dueDateHovered===false?"dueDateIcon":"darkDueDateIcon"}src="https://image.shutterstock.com/image-vector/black-calendar-icon-design-vector-600w-1818197549.jpg"alt="calandar" />
                <p id="dueDateText">Due date</p>
            </div>
            <div id={props.currentList==="My Day"?"hide":"addedToMyDayDiv"}onMouseEnter={()=>setAddedToMyDayHovered(true)}onMouseLeave={()=>setAddedToMyDayHovered(false)}>
                <img id={addedToMyDayHovered===false?"addedToMyDayIcon":"darkAddedToMyDayIcon"}src="https://image.shutterstock.com/image-vector/brightness-icon-sun-vector-illustration-600w-1667772874.jpg"alt="sun" />
                <p id="addedToMyDayText">Added to My Day</p>
            </div>
            <div id="alphabeticallyDiv"onMouseEnter={()=>setAlphabeticallyHovered(true)}onMouseLeave={()=>setAlphabeticallyHovered(false)}>
                <img id={alphabeticallyHovered===false?"alphabeticallyIcon":"darkAlphabeticallyIcon"}src="https://image.shutterstock.com/image-vector/down-black-arrow-icon-600w-1646995147.jpg"alt="arrows" />
                <p id="alphabeticallyText">Alphabetically</p>
            </div>
            <div id="creationDateDiv"onMouseEnter={()=>setCreationDateHovered(true)}onMouseLeave={()=>setCreationDateHovered(false)}>
                <img id={creationDateHovered===false?"creationDateIcon":"darkCreationDateIcon"}src="https://image.shutterstock.com/image-vector/calandar-icon-time-sign-600w-1348763753.jpg"alt="calandar" />
                <p id="plusSign">+</p>
                <p id="creationDateText">Creation date</p>
            </div>

        </div>
    );
};
export{SortMenu};