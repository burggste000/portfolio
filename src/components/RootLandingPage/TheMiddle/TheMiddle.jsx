import "./theMiddle.css";
import { Projects } from "./Projects/Projects.jsx";
import { Skills } from "./Skills/Skills.jsx";
import { About } from "./About/About.jsx";
import { Contact } from "./Contact/Contact.jsx";
//Random note
const TheMiddle = (props) => {
	return (
		<div id={props.viewClicked === true ? "" : "hide"}>
			<Projects />
			<About />
			<Skills />
			<Contact />
		</div>
	);
};
export { TheMiddle };
