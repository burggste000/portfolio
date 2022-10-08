import"./start.css";
const Start=props=>{
    return(
        <div id="viewDiv">
            <p id="welcome">Hi, I'm Stephen</p>
            <button id="startButton"onClick={()=>props.setViewClicked(true)}>View</button>
        </div>
    );
};
export{Start};