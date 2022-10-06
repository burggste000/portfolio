import"./projects.css"

const Projects=()=>{
    return(
        <div id="background1">

            <div id="myPicDiv">
                <img id="me"src="https://avatars.githubusercontent.com/u/88006165?s=400&u=29c195b17d259548806350d632fc4f20d67c8aac&v=4"alt="me" />
            </div>
            <h2>How the skills pay the bills</h2>
            <div id="projectsDiv">
                <img className="projectImages"src="https://live.staticflickr.com/8536/10187142295_8a12343d8e_n.jpg"alt="organization project" />

                <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_960_720.png"alt="task project" />

                <img className="projectImages"src="https://images.squarespace-cdn.com/content/v1/62bbaaef7cc39c494bcaba86/8eab7f38-b20d-4bc5-9f5a-bf99f770c6cc/Untitled+1517+%281%29.png?format=1500w"alt="company website project" />
            </div>
        
        </div>
    );
};
export{Projects};