import"./rootLandingPage.css";
import{TheMiddle}from"./TheMiddle/TheMiddle.jsx";
import{Start}from"./Start/Start.jsx";
import react from"react";

const[viewClicked,setViewClicked]=react.useState(false);

const RootLandingPage=()=>{
    return(
        <>
            <Start setViewClicked={setViewClicked} />
            <TheMiddle viewClicked={viewClicked} />
        </>
    );
};
export{RootLandingPage};