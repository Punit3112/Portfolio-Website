import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";
import CardContainer from "./CardContainer";
import Work from "./Work";
import { Link } from "react-router-dom";
import "../css/Home.css";

/**
 * A function that returns an <AnimatedPage></AnimatedPage> component containing the home page of the website
 *
 * @param {Object} data The app data fetched from App.jsx
 * @param {Function} setDocumentTitle A function that sets the web page's document title
 *
 * @returns {JSX.Element} an <AnimatedPage></AnimatedPage> component containing the home page of the website
 */
function Home({ data, setDocumentTitle }) {
	// Get the list of words used for the typewriter component
	const typewriterOptions = data.content.typewriter_options;

	// Get each skill listed in the portfolio section
	const skills = data.content.portfolio.skills.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	const workExperience = data.content.portfolio.work;

	// Change the document's title on render
	useEffect(() => {
		setDocumentTitle("Homepage");
	}, []);

	return (
		<AnimatedPage className={"about"}>
			{/* Profile + Typewriter */}
			<div className="profile w-100">
				<div>
					<h1>
						Hi 👋, <br />
						I'm Punit
					</h1>

					<span className="typewriter">
						{"I'm a "}
						<Typewriter
							className="typewriter"
							words={typewriterOptions}
							cursor={true}
							cursorBlinking={true}
							loop={true}
							typeSpeed={60}
							deleteSpeed={45}
						/>
					</span>
				</div>
				<img src="/images/headshot.jpeg" alt="headshot" className="headshot" />
			</div>

			{/* About Me Section */}
			<div className="text-section w-100">
				<h2 className="section-header">About Me</h2>

				<p>
					I'm a Frontend Developer with 3+ years of experience crafting
					responsive, user-friendly web interfaces. I specialize in creating
					seamless user experiences using modern web technologies. Outside of
					coding, I enjoy listening to music, exercising, and playing games. I'm
					also passionate about building{" "}
					<Link to="/projects" className="text-link">
						personal projects
					</Link>{" "}
					to refine my programming and design skills—be sure to check some of
					them out! <br></br>
					<br></br>If you like what I do or want to get in touch, please
					consider reaching out to me on any of these platforms:
				</p>

				<div className="contacts">
					<a href="https://github.com/Punit3112" target="_blank">
						<img src="/images/github.svg" alt="Github" />
					</a>
					<a
						href="https://https://www.linkedin.com/in/punit-tripathi-9949371ba/"
						target="_blank"
					>
						<img src="/images/linkedin.svg" alt="LinkedIn" />
					</a>
					<a href="www.punittripathi100@gmail.com" target="_blank">
						<img src="/images/gmail.svg" alt="Gmail" />
					</a>
					<a href="https://x.com/knows_no_shit" target="_blank">
						<img src="/images/twitter.svg" alt="Instagram" />
					</a>
				</div>
			</div>

			{/* Work Experience Section */}
			<Work data={workExperience}></Work>

			{/* Programming Skills Section */}
			<CardContainer header="My Skills" cards={skills} />
		</AnimatedPage>
	);
}

export default Home;
