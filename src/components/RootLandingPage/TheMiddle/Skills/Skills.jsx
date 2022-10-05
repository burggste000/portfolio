import"./skills.css"

const Skills=()=>{
    return(
        <div id="background1">
            <img id="me"src="https://avatars.githubusercontent.com/u/88006165?s=400&u=29c195b17d259548806350d632fc4f20d67c8aac&v=4"alt="me" />
            <div>
                <div>
                    <img id="javascriptPic"className="skills"src="https://live.staticflickr.com/3708/14102205140_d25a5588ea_m.jpg"alt="javascript" />
                    <img id="reactPic"className="skills"src="https://live.staticflickr.com/4779/25850433237_f57ce6b815_m.jpg"alt="reactjs" />
                    <img id="htmlPic"className="skills"src="https://image.shutterstock.com/image-vector/logo-vector-html-5-low-600w-1601607721.jpg"alt="html" />
                </div>
                <div>
                    <img id="cssPic"className="skills"src="https://image.shutterstock.com/image-vector/logo-vector-css-3-low-600w-1902943426.jpg"alt="css" />
                    <img id="githubPic"className="skills"src="https://live.staticflickr.com/8328/28828372394_f6260987d9_s.jpg"alt="github" />
                    <img id="linuxPic"className="skills"src="https://live.staticflickr.com/8357/8340340399_c4df9c32dd_n.jpg"alt="linux" />
                    <img id="nodePic"className="skills"src="https://live.staticflickr.com/65535/50886824773_38ba7914dd_w.jpg"alt="node" />
                </div>
                <div>
                    <img id="expressPic"className="skills"src="https://live.staticflickr.com/65535/50992256612_6e005d1695_w.jpg"alt="express" />
                    <img id="figmaPic"className="skills"src="https://image.shutterstock.com/image-vector/colorful-app-logo-on-dark-600w-2001876035.jpg"alt="figma" />
                    <img id="qaPic"className="skills"src="https://image.shutterstock.com/image-vector/qa-logo-design-vector-template-600w-2171017265.jpg"alt="qa testing" />
                </div>
            </div>
        </div>
    );
};
export{Skills};