import"./theMiddle.css";
import{Projects}from"./Projects/Projects.jsx";
import{Skills}from"./Skills/Skills.jsx";
import{About}from"./About/About.jsx";

const TheMiddle=props=>{
    return(
        <div id={props.viewClicked===true&&props.introVideoShowing===false||props.viewClicked===false&&props.introVideoShowing===true?'':"hide"}>
            <Projects />
            <About />
            <Skills />
        </div>
    );
};
export{TheMiddle};