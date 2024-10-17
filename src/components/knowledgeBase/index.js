import React, { Fragment } from "react";
// import Heading from "../heading";
// import Filter from "../filter";
import MainDashboardHeading from "../mainDashboardHeding";
import img1 from "../../assets/images/illustration.png";
import img2 from "../../assets/images/illustration2.png";
import img3 from "../../assets/images/illustration3.png";
import img4 from "../../assets/images/illustration4.png";
import styles from "./style.module.css";
import Button from "../button";
import { Link } from "react-router-dom";

const KnowledgeBase = () => {
	return (
		<Fragment>
			{/* <Heading title={"Knowledge Base"} btnblue={false} btnWhite={false} />
      <Filter select={false} button={false} customClass={styles.search_input} /> */}

			<MainDashboardHeading
				title={"KnowledgeBase"}
				outlineBtn={false}
				icon={false}
				fillBtn={false}
				fillTitle={false}
			/>
			<div className={styles.reports_main}>
				<div className={styles.card_wrapper}>
					<div className={styles.card_box}>
						<div className={styles.card_img}>
							<img
								src={img1}
								alt="card img"
							/>
						</div>
						<div className={styles.card_title}>Getting Started</div>
						<div className={styles.card_info}>Guide to get started faster</div>
						<div className={styles.card_info}>
							Video tutorials for beginners
						</div>
						<div className={styles.card_info}>Moving to Bolt system</div>
						<div className={styles.card_more_info}>
							<Link to={"/article"}>More Tutorials</Link>
						</div>
					</div>

					<div className={styles.card_box}>
						<div className={styles.card_img}>
							<img
								src={img2}
								alt="card img"
							/>
						</div>
						<div className={styles.card_title}>Personal Settings</div>
						<div className={styles.card_info}>Setting up your profile</div>
						<div className={styles.card_info}>Changing business name</div>
						<div className={styles.card_info}>Changing email address</div>
						<div className={styles.card_more_info}>
							<Link to={"/"}> More Tutorials</Link>
						</div>
					</div>

					<div className={styles.card_box}>
						<div className={styles.card_img}>
							<img
								src={img3}
								alt="card img"
							/>
						</div>
						<div className={styles.card_title}>Billing</div>
						<div className={styles.card_info}>Payment declined</div>
						<div className={styles.card_info}>Get a refund</div>
						<div className={styles.card_info}>Subscriptions</div>
						<div className={styles.card_more_info}>
							{" "}
							<Link to={"/"}>More Tutorials</Link>
						</div>
					</div>

					<div className={styles.card_box}>
						<div className={styles.card_img}>
							<img
								src={img4}
								alt="card img"
							/>
						</div>
						<div className={styles.card_title}>Commerce</div>
						<div className={styles.card_info}>Add products</div>
						<div className={styles.card_info}>Selling guide</div>
						<div className={styles.card_info}>Create categories</div>
						<div className={styles.card_more_info}>
							{" "}
							<Link to={"/"}>More Tutorials</Link>
						</div>
					</div>
				</div>
				<div className={styles.card_wrapper}>
					<div className={styles.card_box}>
						<div className={styles.card_title}>Community Forum</div>
						<div className={styles.card_info}>
							Get help from community members, ask any questions and get answers
							faster.
						</div>
						<div className={styles.card_more_info}>Join Community</div>
					</div>

					<div className={styles.card_box}>
						<div className={styles.card_title}>Webinars</div>
						<div className={styles.card_info}>
							Join our series of webinars where you can ask questions live and
							see a presentation.
						</div>
						<div className={styles.card_more_info}>Register</div>
					</div>
				</div>
				<hr className={styles.rectangle} />
				<div className={styles.reports_bottom}>
					<div className={styles.rb_title}>Still Need Help?</div>
					<div className={styles.rb_description}>
						Get in touch with us and we will be happy to help you out!
					</div>
					<div className={styles.rb_btn}>
						<Button
							title={"Contact Support"}
							bg={"blue"}
							size={"small"}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default KnowledgeBase;
