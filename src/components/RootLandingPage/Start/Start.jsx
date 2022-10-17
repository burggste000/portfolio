import"./start.css";
const Start=props=>{

    function showIntroVideo(){
        setTimeout(()=>{
            props.setIntroVideoShowing(false);
        },18000);
    }

    return(
        <div id="viewDiv">
            <p id={props.introVideoShowing===false?"welcome":"hide"}>Hi, I'm Stephen</p>
            <button id={props.viewClicked===true?"hide":"startButton"}onClick={()=>{props.setViewClicked(true);props.setIntroVideoShowing(true);showIntroVideo();}}>View</button>
        </div>
    );
};
export{Start};