import "./skills.css";
import javaScriptLogo from "./images/javaScript.jpg";
import reactLogo from "./images/react.jpg";
import htmlLogo from "./images/html.jpg";
import cssLogo from "./images/css.jpg";
import gitHubLogo from "./images/gitHub.jpg";
import linuxLogo from "./images/linux.jpg";
import nodeLogo from "./images/node.png";
import microsoftWindowsLogo from "./images/microsoftWindows.png";
import figmaLogo from "./images/figma.jpg";
import visualStudioLogo from "./images/visualStudio.png";

const Skills = () => {
	return (
		<div id="background2">
			<div id="skillsTitleDiv">
				<h2 id="skillsTitle">My Skills</h2>
			</div>
			<div className="skillsDivs">
				<img className="skills" src={javaScriptLogo} alt="javascript" />
				<img className="skills" src={reactLogo} alt="reactjs" />
				<img className="skills" src={cssLogo} alt="css" />
			</div>
			<div className="skillsDivs">
				<img className="skills" src={gitHubLogo} alt="github" />
				<img id="htmlLogo" className="skills" src={htmlLogo} alt="html" />
				<img className="skills" src={nodeLogo} alt="node" />
				<img className="skills" src={linuxLogo} alt="linux" />
			</div>
			<div className="skillsDivs">
				<img
					className="skills"
					src={visualStudioLogo}
					alt="visual studio code"
				/>
				<img
					className="skills"
					src={microsoftWindowsLogo}
					alt="microsoft windows"
				/>
				<img id="figmaLogo" className="skills" src={figmaLogo} alt="figma" />
			</div>
		</div>
	);
};
export { Skills };
