import"./rootLandingPage.css";
import{TheMiddle}from"./TheMiddle/TheMiddle.jsx";
import react from"react";

const[viewClicked,setViewClicked]=react.useState(false);

const RootLandingPage=()=>{
    return(
        <TheMiddle viewClicked={viewClicked} />
    );
};
export{RootLandingPage};