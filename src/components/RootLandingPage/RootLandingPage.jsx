import"./rootLandingPage.css";
import{TheMiddle}from"./TheMiddle/TheMiddle.jsx";
import{Start}from"./Start/Start.jsx";
import{TransitionVideo}from"./Start/TransitionVideo/TransitionVideo.jsx";
import react from"react";


const RootLandingPage=()=>{
    const[viewClicked,setViewClicked]=react.useState(false);
    const[introVideoShowing,setIntroVideoShowing]=react.useState(false);
    return(
        <>
            <Start viewClicked={viewClicked}setViewClicked={setViewClicked}setIntroVideoShowing={setIntroVideoShowing} />
            <TransitionVideo viewClicked={viewClicked}introVideoShowing={introVideoShowing} />
            <TheMiddle viewClicked={viewClicked} />
        </>
    );
};
export{RootLandingPage};