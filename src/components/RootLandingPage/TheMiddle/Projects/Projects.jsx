import "./projects.css";
import mePhoto from "./mePhoto.JPG";

const Projects = () => {
  return (
    <div id="background1">
      <div id="myPicDiv">
        <img id="me" src={mePhoto} alt="me" />
      </div>
      <h2>My websites and projects</h2>
      <div id="projectsDiv">
        <a href="https://www.fishingbridgeusa.com/">
          <figure className="projectLabels">
            <img
              className="projectImages"
              src="https://images.squarespace-cdn.com/content/v1/62bbaaef7cc39c494bcaba86/8eab7f38-b20d-4bc5-9f5a-bf99f770c6cc/Untitled+1517+%281%29.png?format=1500w"
              alt="company website project"
            />
            <figcaption>Fishing Bridge USA Website</figcaption>
          </figure>
        </a>
        <a href="https://burggste000.github.io/task-integration/taskManagement">
          <figure className="projectLabels">
            <img
              className="projectImages"
              src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_960_720.png"
              alt="task project"
            />
            <figcaption>Task Management Website</figcaption>
          </figure>
        </a>
        <a href="https://www.youtube.com/watch?v=lSy-qSmQvdE">
          <figure className="projectLabels">
            <img
              className="projectImages"
              src="https://live.staticflickr.com/8536/10187142295_8a12343d8e_n.jpg"
              alt="organization project"
            />
            <figcaption>Organization Chart (Demo)</figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};
export { Projects };
