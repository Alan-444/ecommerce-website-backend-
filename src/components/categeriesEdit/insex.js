import React, { Fragment } from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import categeriesEdit from "../../data/categoriesEdit.json";
import IconDivider from "../../icons/iconDivider";
import EditIcon from "../../icons/edit";
import TrashIcon from "../../icons/trashIcon";
import { Link } from "react-router-dom";

const CategoriesEdit = () => {
	return (
		<Fragment>
			<div className={styles.CategoriesEdit}>
				<MainDashboardHeading
					title={"Women Clothes"}
					title1={"Cancel"}
					title2={"Add Category"}
					fillTitle={"Save"}
					icon={false}
					icon2={false}
					fillBtn={true}
					outlineBtn={true}
				/>
				<div className={styles.productEdit}>
					<div className={styles.product}>
						<h6 className={styles.pe_title}>
							Products <span>12</span>
						</h6>
						{categeriesEdit.map((product, index) => (
							<div
								key={index}
								className={styles.pe_product}
							>
								<span>
									<IconDivider />
								</span>
								<div className={styles.pe_imgTitle}>
									<img
										src={product.imgSrc}
										alt={product.title}
									/>
									<p>{product.title}</p>
								</div>
								<span className={styles.delete_product}>
									<Link to={"#"}>
										<EditIcon />
									</Link>
									<Link to={"#"}>
										<TrashIcon />
									</Link>
								</span>
							</div>
						))}
						<button className={styles.add_product}>+ Add Pr</button>
					</div>
					<div className={styles.catVisibility}>
						<div className={styles.toggle}>
							<h5 className={styles.t_title}>Category Visibility</h5>
							<div className={styles.toggle_switch}>
								<label className={styles.switch}>
									<input type="checkbox" />
									<span className={styles.slider}></span>
								</label>
								<span>Visible on site</span>
							</div>
						</div>
						<div className={styles.toggle}>
							<h5 className={styles.t_title}>Category Info</h5>
							<form className={styles.form}>
								<div className={styles.inputGroup}>
									<label>Category Name</label>
									<input
										type="text"
										placeholder="Enter category name"
									/>
								</div>

								<label>image</label>
								<div className={styles.fileDropZone}>
									<input
										type="file"
										className={styles.fileInput}
									/>
									<button type="button">Add File</button>
									<p>Or drag and drop files</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<MainDashboardHeading
						title1={"Cancel"}
						title2={"Add Category"}
						fillTitle={"Save"}
						icon={false}
						icon2={false}
						fillBtn={true}
						outlineBtn={true}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default CategoriesEdit;
