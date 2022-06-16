import"./taskListItem.css";
import react from"react";
const TaskListItem=props=>{
    const[taskHoveredCircle,setTaskHoveredCircle]=react.useState(false);
    const[starClicked,setStarClicked]=react.useState(false);

    return(
        <div className="taskDiv"key={props.index+0.5}>
            <img id={taskHoveredCircle===false?"completeTaskCircle":"hide"}onMouseEnter={()=>setTaskHoveredCircle(true)}onMouseLeave={()=>setTaskHoveredCircle(false)}src="https://image.shutterstock.com/image-photo/white-paper-texture-background-cardboard-600w-1384887293.jpg"alt="text" />
            <img id={taskHoveredCircle===true?"completeTaskCircle":"hide"}onMouseEnter={()=>setTaskHoveredCircle(true)}onMouseLeave={()=>setTaskHoveredCircle(false)}src="https://image.shutterstock.com/image-vector/tick-isolated-on-white-background-600w-1913803054.jpg"alt="checkmark" />
            <p className="taskText">{props.value.title}</p>
            <img id={starClicked===false?"importantStar":"hide"}onClick={()=>setStarClicked(true)}src="https://image.shutterstock.com/image-vector/star-vector-icon-600w-1155631591.jpg"alt="star" />
            <img id={starClicked===true?"importantStarBlue":"hide"}onClick={()=>setStarClicked(false)}src="https://image.shutterstock.com/image-vector/blue-vector-star-600w-389172595.jpg"alt="blue star" />
        </div>
    );
};
export{TaskListItem};