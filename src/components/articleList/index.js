import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const ArticleData = [
	{ title: "Introduction to Product" },
	{ title: "Tutorials for Beginners" },
	{ title: "Moving to Bolt System" },
	{ title: "Accessibility" },
	{ title: "Content Management" },
	{ title: "Generating Reports" },
];

const ArticleList = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles.article_left}>
			{ArticleData.map((value, index) => (
				<Link
					key={index}
					to="#"
					className={`${styles.article_left_data} ${
						activeIndex === index ? styles.click : ""
					}`}
					onClick={() => setActiveIndex(index)}
				>
					{value.title}
				</Link>
			))}
		</div>
	);
};

export default ArticleList;
