import React from "react";
import MainDashboardHeading from "../mainDashboardHeding";
// import Img from "../../assets/images/Bitmap.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/edit";
import CategoryData from "../../data/category.json";

const Categories = () => {
	return (
		<>
			<div className={styles.orders}>
				<MainDashboardHeading
					title={"Categories"}
					title2={"Add Category"}
					icon={false}
					fillBtn={true}
				/>
				<div className={styles.category_wrap}>
					{CategoryData.map((value, index) => (
						<div
							className={styles.cw_img}
							key={index}
						>
							<div className={styles.category_img}>
								<img
									src={value.Img}
									alt=""
								/>
								<div className={styles.cat_img_hover}></div>
								<div className={styles.cw_btn}>
									<Link to={"/categoriesEdit"}>
										<span>
											<EditIcon /> Edit
										</span>
									</Link>
								</div>
							</div>
							<div className={styles.category_cnt}>
								<h2>{value.title}</h2>
								<span>{value.count}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Categories;
