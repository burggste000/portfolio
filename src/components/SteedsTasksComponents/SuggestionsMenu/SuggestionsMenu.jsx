import"./suggestionsMenu.css";
import react from"react";

const SuggestionsMenu=props=>{
    const[suggestionsMenuXhovered,setSuggestionsMenuXhovered]=react.useState(false);

    return(
        <div id={props.suggestionsClicked===false?"hide":"suggestionsParentDiv"}>
                <h2 id="SuggestionsTitle">Suggestions</h2>
            <div id="suggestionsXdiv">
                <img id={suggestionsMenuXhovered===false?"suggestionsX":"darkSuggestionsX"}onClick={()=>props.setSuggestionsClicked(false)}src="https://image.shutterstock.com/image-vector/cancel-cross-close-icon-vector-600w-294801173.jpg"alt="close button" />
            </div>
        </div>
    );
};
export{SuggestionsMenu};