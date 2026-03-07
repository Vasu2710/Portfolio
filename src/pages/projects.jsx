import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I’m a Backend Developer with over a year of professional experience building scalable and reliable systems using technologies like Python Django, Java Spring Boot, and Node.js. I enjoy designing clean APIs, optimizing backend logic, and building systems that handle real-world complexity. My work has involved developing production-grade APIs, contributing to analytics and reporting platforms, and building full-stack applications using modern stacks such as React, PostgreSQL, and MongoDB. I’m passionate about writing maintainable code, solving challenging backend problems, and continuously exploring system design concepts like microservices, event-driven architectures, and distributed systems.

Outside of coding, I’m a passionate gearhead and travel enthusiast. I enjoy learning about automobiles, engines, and the technology that powers modern vehicles—something that naturally aligns with my curiosity for how complex systems work. Traveling is another big inspiration for me; exploring new places and cultures keeps me creative and open-minded. Whether it’s building robust backend systems or planning the next road trip, I’m always driven by curiosity, problem-solving, and a desire to keep learning.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
