import"./transitionVideo.css";

const TransitionVideo=props=>{
    return(
    <video id={((props.viewClicked===false&&props.introVideoShowing===false)||(props.viewClicked===true&&props.introVideoShowing===false))?"hide":"transitionVideo"}autoPlay="true" loop="true"muted="true">
        <source src="https://ak.picdn.net/shutterstock/videos/1057008629/preview/stock-footage-hyperspace-jump-through-the-stars-to-a-distant-space-k-d-rendering-traveling-through-star-fields.webm"type="video/webm" />
    </video>
    );
};
export{TransitionVideo};