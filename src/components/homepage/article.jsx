import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	const isExternal = link && (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("mailto:"));

	const LinkInner = (
		<>
			Read article{" "}
			<FontAwesomeIcon
				style={{ fontSize: "10px" }}
				icon={faChevronRight}
			/>
		</>
	);

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">|&nbsp;&nbsp;&nbsp;{date}</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">{description}</div>
					<div className="homepage-article-link">
						{isExternal ? (
							<a href={link} target="_blank" rel="noreferrer">
								{LinkInner}
							</a>
						) : (
							<Link to={link}>{LinkInner}</Link>
						)}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
