import"./sortMenu.css";
import react from"react";

const SortMenu=props=>{
    const[importanceHovered,setImportanceHovered]=react.useState(false);
    const[dueDateHovered,setDueDateHovered]=react.useState(false);
    const[alphabeticallyHovered,setAlphabeticallyHovered]=react.useState(false);
    const[creationDateHovered,setCreationDateHovered]=react.useState(false);

    return(
        <div id={props.sortMenuClicked===false?"hide":"myDaySortDiv"}>
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