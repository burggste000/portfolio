import"./rootLandingPage.css";
import{TheMiddle}from"./TheMiddle/TheMiddle.jsx";
import{Start}from"./Start/Start.jsx";
import react from"react";


const RootLandingPage=()=>{
    const[viewClicked,setViewClicked]=react.useState(false);
    return(
        <>
            <Start viewClicked={viewClicked}setViewClicked={setViewClicked} />
            <TheMiddle viewClicked={viewClicked} />
        </>
    );
};
export{RootLandingPage};