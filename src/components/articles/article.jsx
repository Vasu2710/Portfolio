import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	const isExternal = link && (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("mailto:"));

	const LinkInner = (
		<div className="article-right-side">
			<div className="article-title">{title}</div>
			<div className="article-description">{description}</div>
			<div className="article-link">
				Read Article{" "}
				<FontAwesomeIcon
					style={{ fontSize: "10px" }}
					icon={faChevronRight}
				/>
			</div>
		</div>
	);

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				{isExternal ? (
					<a href={link} target="_blank" rel="noreferrer">
						{LinkInner}
					</a>
				) : (
					<Link to={link}>{LinkInner}</Link>
				)}
			</div>
		</React.Fragment>
	);
};

export default Article;
