import"./start.css";

const Start=props=>{

    function showIntroVideo(){
        setTimeout(()=>{
            props.setIntroVideoShowing(false);
        },18000);
    }

    return(
        <>
            {/* <div>
                <video id={props.viewClicked===true?"hide":"startBackgroundVid"}autoPlay="true"loop="true"muted="true">
                    <source src="https://ak.picdn.net/shutterstock/videos/1082922796/preview/stock-footage-mirror-ball-disco-lights-star-glitter-club-dance-party-background.webm"type="video/webm" />
                </video>
            </div> */}
            
            <div id={props.viewClicked===true?"hide":"interactDiv"}>
                <p id={props.viewClicked===true?"hide":"welcome"}>Hi, I'm Stephen</p>
                <button id={props.viewClicked===true?"hide":"startButton"}onClick={()=>{props.setViewClicked(true);props.setIntroVideoShowing(true);showIntroVideo();}}>View</button>
            </div>
        </>
    );
};
export{Start};