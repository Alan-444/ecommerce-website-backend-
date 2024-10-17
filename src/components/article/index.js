import React from "react";
import styles from "./style.module.css";
// import Heading from "../heading";
import { Link } from "react-router-dom";
// import Filter from "../filter";
import Button from "../button";
import ArticleList from "../articleList";

const Article = () => {
	return (
		<div className={styles.article_main}>
			<div className={styles.back_btn}>
				<span> &#8592;</span>Back
			</div>

			{/* <Heading
				title={"Women Clothes"}
				btnblue={false}
				btnWhite={false}
			/> */}
			<div className={styles.article_wrapper}>
				<ArticleList />
				<div className={styles.article_right}>
					{/* <Filter
						select={false}
						button={false}
						customClass={styles.search_input}
					/> */}
					<div className={styles.article_right_content}>
						<div className={styles.arc_first_box}>
							<div className={styles.arc_title}>Introduction to Product</div>
							<div className={styles.arc_description}>
								Bolt is content management system, or CMS. Subscription includes
								content hosting, professionally designed layouts, 24/7 support,
								and access to our user-friendly platform for managing your
								business. You can use bolt to create management systems.
							</div>
							<div className={styles.arc_message}>
								Recommended: <br />
								You can learn faster by looking some onboarding videos in video
								gallery.
							</div>
							<hr className={styles.rectangle} />
						</div>

						<div className={styles.arc_second_box}>
							<div className={styles.arc_title}>Starting Guide</div>
							<div className={styles.arc_description}>
								You can choose from a range of billing plans to get your idea
								working, whether you’re starting with a website or launching a
								new business.
							</div>
							<div className={styles.arc_message_wrapper}>
								<span>1</span>
								<div className={styles.arc_description}>
									All billing plans are available on monthly and annual payment
									cycles. On an annual billing cycle, the average monthly cost
									is lower, and you can get a 3 months free.
								</div>
							</div>

							<div className={styles.arc_message_wrapper}>
								<span>2</span>
								<div className={styles.arc_description}>
									Upgrade to paid service to make your site public. If you need
									more time to design your site before going live, you can hide
									it behind a password.
								</div>
							</div>

							<div className={styles.arc_message_wrapper}>
								<span>3</span>
								<div className={styles.arc_description}>
									Site has a trial period. Trial period is free two-week period
									where you can explore the platform, upload content, experiment
									with ecommerce website.
								</div>
							</div>
							<hr className={styles.rectangle} />
						</div>

						<div className={styles.arc_third_box}>
							<div className={styles.arc_title}>Additional Information</div>
							<div className={styles.arc_tabs_wrapper}>
								<Link
									to={"#"}
									className={styles.tab}
								>
									Onboarding
								</Link>
								<Link
									to={"#"}
									className={styles.tab}
								>
									Tutorials
								</Link>
								<Link
									to={"#"}
									className={styles.tab}
								>
									Guides for Beginners
								</Link>
							</div>
							<div className={styles.arc_description}>
								In addition to our guides and video tutorials, we offer webinars
								to help you get comfortable and explore our product
								functionality. In our webinars, we walk you through the basics
								of setting up and growing your business.
								<br />
								After it ends, we'll email you a video link to the webinar so
								you can remember everything you have learn anytime. If you can't
								attend the webinar at its scheduled time, you can watch it
								later.
							</div>

							<hr className={styles.rectangle} />
						</div>

						<div className={styles.arc_forth_box}>
							<div className={styles.arc_title}>Was this article helpfull?</div>
							<div className={styles.arc_button_wrapper}>
								<Button
									title={"Yes"}
									size={"small"}
									bg={"white"}
									isButton={true}
								/>
								<Button
									title={"No"}
									size={"small"}
									bg={"white"}
									isButton={true}
								/>
							</div>
							<div className={styles.arc_des}>
								50 people find this article helpfull
							</div>
						</div>
					</div>
				</div>
				{/* <div className={styles.arc_bottom}></div> */}
			</div>
		</div>
	);
};

export default Article;
