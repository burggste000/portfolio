import"./start.css";
const Start=props=>{
    return(
        <>
            <button id="startButton"onClick={()=>props.setViewClicked(true)}>View</button>
        </>
    );
};
export{Start};