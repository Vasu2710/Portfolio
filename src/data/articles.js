import React from "react";

function article_1() {
	return {
		date: "27th Feb 2026",
		title: "Facade Pattern: One Interface to Rule Them All",
		link: "https://medium.com/@vasubansal2002/facade-pattern-one-interface-to-rule-them-all-4720540e0f1a",
		description:
			"The Facade Pattern is a structural design pattern that provides a simple, unified interface to a complex subsystem. Instead of exposing all internal components, it offers a clean entry point that hides complexity from the client.",
		keywords: [
			"Facade Pattern",
			"Vasu Bansal",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "27 Feb 2026",
		title: "Adapter Pattern in System Design — A Practical Guide for Developers",
		link: "https://medium.com/@vasubansal2002/adapter-pattern-in-system-design-a-practical-guide-for-developers-14b30bf38d66",
		description:
			"The Adapter Pattern is a structural design pattern that allows two incompatible interfaces to work together.",
		style: ``,
		keywords: [
			"Adapter Pattern",
			"System Design",
			"Vasu Bansal",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "7 Mar 2026",
		title: "Spring Boot: Bean and its lifecycle",
		link: "https://medium.com/p/c80eea3f8c3a?postPublishedType=initial",
		description:
			"A Bean is an object that is created, managed, and controlled by the Spring IoC container. IoC Container — contains all the beans which gets created and also manages them.",
		style: ``,
		keywords: [
			"Bean Lifecycle",
			"System Design",
			"Vasu Bansal",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1, article_2, article_3];

export default myArticles;
