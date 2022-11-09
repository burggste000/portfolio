import "./contact.css";

const Contact = () => {
	return (
		<div id="contactMeDiv">
			<h3 id="contactTitle">Reach out!</h3>
			<div id="aboutLinksDiv">
				<a className="contactLinks" href="https://github.com/burggste000">
					My GitHub Profile
				</a>
				<p id="email">Email me at: steedsranch@gmail.com</p>
				<a
					className="contactLinks"
					href="https://www.linkedin.com/in/stephen-burggraaf-867993226/"
				>
					My LinkedIn Profile
				</a>
			</div>
		</div>
	);
};

export { Contact };
