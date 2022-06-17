import"./suggestionsMenu.css";
import react from"react";

const SuggestionsMenu=props=>{
    const[suggestionsMenuXhovered,setSuggestionsMenuXhovered]=react.useState(false);

    // react.useEffect(()=>{
        //Make a function that will get all of the names of the lists that I have, then I need to make a function to get all the tasks from those lists.
    // });


    return(
        <div id={props.suggestionsClicked===false?"hide":"suggestionsParentDiv"}>
                <h2 id="SuggestionsTitle">Suggestions</h2>
            <div id="suggestionsXdiv"onMouseEnter={()=>setSuggestionsMenuXhovered(true)}onMouseLeave={()=>setSuggestionsMenuXhovered(false)}>
                <img id={suggestionsMenuXhovered===false?"suggestionsX":"darkSuggestionsX"}onClick={()=>props.setSuggestionsClicked(false)}src="https://image.shutterstock.com/image-vector/cancel-cross-close-icon-vector-600w-294801173.jpg"alt="close button" />
            </div>
        </div>
    );
};
export{SuggestionsMenu};