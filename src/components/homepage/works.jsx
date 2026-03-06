import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ptune.png"
								alt="parentune"
								className="work-image"
							/>
							<div className="work-title">Parentune</div>
							<div className="work-subtitle">
								SDE-1 (Backend)
							</div>
							<div className="work-duration">Aug 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./simp.jpeg"
								alt="simplify"
								className="work-image"
							/>
							<div className="work-title">Simplify Worforce Technologies</div>
							<div className="work-subtitle">
								Assocaite Software Engineer
							</div>
							<div className="work-duration">Aug 2024 - Aug 2025</div>
						</div>

						<div className="work">
							<img
								src="./simp.jpeg"
								alt="simplify"
								className="work-image"
							/>
							<div className="work-title">Simplify Worforce Technologies</div>
							<div className="work-subtitle">
								SWE Intern
							</div>
							<div className="work-duration">Aug 2023 - Aug 2024</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
