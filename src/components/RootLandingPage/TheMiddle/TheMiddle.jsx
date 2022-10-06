import"./theMiddle.css";
import{Projects}from"./Projects/Projects.jsx";
import{Skills}from"./Skills/Skills.jsx";
import{About}from"./About/About.jsx";

const TheMiddle=props=>{
    return(
        <div id={props.viewClicked===true?'':"hide"}>
            <p id="welcome">Hi, I'm Stephen</p>
            <Projects />
            <About />
            <Skills />
        </div>
    );
};
export{TheMiddle};