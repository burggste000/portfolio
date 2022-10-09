import"./start.css";
import react from"react";
import introductionVideo from"./introductionVideo.webm";
const Start=props=>{
    const[showIntro,setShowIntro]=react.useState(false);

    function startIntro(){
        const timer=setTimeout(()=>{
            setShowIntro(false);
        },20000);
    }

    return(
        <>
            <div id="viewDiv">
                <p id="welcome">Hi, I'm Stephen</p>
                <button id="startButton"onClick={()=>{setShowIntro(true);props.setViewClicked(true);startIntro();}}>View</button>
            </div>
            <video autoPlay loop muted id={showIntro===false?"hide":"introVideo"}>
                <source src={introductionVideo}type="video/webm" />
            </video>
        </>
    );
};
export{Start};