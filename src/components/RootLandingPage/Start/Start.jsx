import"./start.css";

const Start=props=>{
    return(
        <div id={props.viewClicked===true?"hide":"interactDiv"}>
            <p id={props.viewClicked===true?"hide":"welcome"}>Hi, I'm Stephen</p>
            <button id={props.viewClicked===true?"hide":"startButton"}onClick={()=>props.setViewClicked(true)}>View</button>
        </div>
    );
};
export{Start};