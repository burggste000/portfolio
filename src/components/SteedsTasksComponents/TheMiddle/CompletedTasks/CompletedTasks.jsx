import react from"react";

const CompletedTasks=props=>{
    const[starClicked,setStarClicked]=react.useState(false);

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