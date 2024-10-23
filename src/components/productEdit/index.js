import React, { Fragment } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import MainDashboardHeading from "../mainDashboardHeding";
import styles from "./style.module.css";

const ProductEditForm = () => {
	const initialValues = {
		productName: "",
		productDescription: "",
		images: [],
		price: "",
		discountPrice: "",
		tax: false,
		multipleOptions: true,
		options: [{ size: "", value: ["S", "M", "L", "XL"] }],
		weight: "",
		country: "",
		isDigital: false,
		categories: [],
		tags: ["T-Shirt", "Men Clothes", "Summer Collection"],
		seoTitle: "",
		seoDescription: "",
	};

	const handleSubmit = (values) => console.log("Form Data:", values);

	return (
		<Fragment>
			<div className={styles.productEditForm}>
				<MainDashboardHeading
					title={"Products"}
					outlineBtn={true}
					title1={"Export"}
					title2={"Add Product"}
					icon={false}
					fillBtn={true}
				/>
				<Formik
					initialValues={initialValues}
					onSubmit={handleSubmit}
				>
					{({ values, setFieldValue }) => (
						<Form className={styles.container}>
							<div className={styles.mainSection}>
								<div className={styles.section1}>
									<h3 className={styles.headTitleinfo}>Information</h3>
									<div className={styles.FieldLabel}>
										<label
											htmlFor="productName"
											className={styles.label}
										>
											Product Name
										</label>
										<Field
											id="productName"
											name="productName"
											placeholder="Product Name"
											className={styles.inp}
										/>
									</div>
									<div className={styles.FieldLabel}>
										<label
											htmlFor="productDescription"
											className={styles.label}
										>
											Product Description
										</label>
										<Field
											as="textarea"
											id="productDescription"
											name="productDescription"
											placeholder="Product description"
											className={styles.textarea}
										/>
									</div>
								</div>

								<hr />

								<div className={styles.section}>
									<h3 className={styles.headTitle}>Images</h3>
									<div className={styles.fileDropZone}>
										<Field
											as="file"
											className={styles.fileInput}
										/>
										<button type="button">Add File</button>
										<p>Or drag and drop files</p>
									</div>
								</div>
								<hr />

								<div className={styles.section}>
									<h3 className={styles.headTitle}>Price</h3>
									<div className={styles.pricerow}>
										<div className={styles.FieldLabel}>
											<label
												htmlFor="price"
												className={styles.label}
											>
												Product Price
											</label>
											<Field
												id="price"
												name="price"
												placeholder="Enter price"
												className={styles.inp}
											/>
										</div>
										<div className={styles.FieldLabel}>
											<label
												htmlFor="discountPrice"
												className={styles.label}
											>
												Discount Price
											</label>
											<Field
												id="discountPrice"
												name="discountPrice"
												placeholder="Price at Discount"
												className={styles.inp}
											/>
										</div>
									</div>

									<div className={styles.toggle_switch}>
										<label className={styles.switch}>
											<input type="checkbox" />
											<span className={styles.slider}></span>
										</label>
										<span>Add tax for this product</span>
									</div>
								</div>
								<hr />

								<div className={styles.section}>
									<h3 className={styles.headTitle}>Different Options</h3>
									<div className={styles.toggle_switch}>
										<label className={styles.switch}>
											<input type="checkbox" />
											<span className={styles.slider}></span>
										</label>
										<span>This product has multiple options</span>
									</div>

									{values.multipleOptions && (
										<FieldArray name="options">
											{({ remove, push }) => (
												<>
													{values.options.map((option, index) => (
														<div
															key={index}
															className={styles.optionRow}
														>
															<label
																htmlFor={`options[${index}].size`}
																className={styles.label}
															>
																Size
															</label>
															<Field
																id={`options[${index}].size`}
																name={`options[${index}].size`}
																className={styles.select}
																as="select"
															>
																<option value="">Select Size</option>
																<option value="S">S</option>
																<option value="M">M</option>
																<option value="L">L</option>
																<option value="XL">XL</option>
															</Field>

															<div className={styles.tagContainer}>
																{option.value.map((val, i) => (
																	<span
																		key={i}
																		className={styles.tag}
																	>
																		{val}{" "}
																		<button
																			type="button"
																			onClick={() => remove(i)}
																		>
																			x
																		</button>
																	</span>
																))}
															</div>
														</div>
													))}
													<button
														type="button"
														onClick={() => push({ size: "", value: [] })}
														className={styles.addMore}
													>
														Add More
													</button>
												</>
											)}
										</FieldArray>
									)}
								</div>
								<hr />

								<div className={styles.section}>
									<h3 className={styles.headTitle}>Shipping</h3>
									<div className={styles.row}>
										<label
											htmlFor="weight"
											className={styles.label}
										>
											Weight
										</label>
										<Field
											id="weight"
											name="weight"
											placeholder="Enter Weight"
											className={styles.inp}
										/>

										<label
											htmlFor="country"
											className={styles.label}
										>
											Country
										</label>
										<Field
											as="select"
											id="country"
											name="country"
											className={styles.select}
										>
											<option value="">Select Country</option>
											<option value="US">United States</option>
											<option value="CA">Canada</option>
										</Field>
									</div>
									<div className={styles.toggle_switch}>
										<label className={styles.switch}>
											<input type="checkbox" />
											<span className={styles.slider}></span>
										</label>
										<span>This is a digital item</span>
									</div>
								</div>
							</div>

							{/* Right Section */}
							<div className={styles.sideSection}>
								<div className={styles.section}>
									<h3 className={styles.headTitle}>Categories</h3>
									{["Women", "Men", "T-Shirt", "Hoodie", "Dress"].map(
										(category) => (
											<label
												key={category}
												className={styles.checkbox}
											>
												<Field
													type="checkbox"
													name="categories"
													value={category}
												/>
												{category}
											</label>
										)
									)}
								</div>

								<div className={styles.section}>
									<h3 className={styles.headTitle}>Tags</h3>
									<FieldArray name="tags">
										{({ remove, push }) => (
											<div className={styles.tagInput}>
												{values.tags.map((tag, index) => (
													<span
														key={index}
														className={styles.tag}
													>
														{tag}
														<button
															type="button"
															onClick={() => remove(index)}
														>
															x
														</button>
													</span>
												))}
												<input
													type="text"
													placeholder="Enter tag name"
													onKeyDown={(e) => {
														if (e.key === "Enter" && e.target.value) {
															push(e.target.value);
															e.target.value = "";
														}
													}}
												/>
											</div>
										)}
									</FieldArray>
								</div>

								<div className={styles.section}>
									<h3 className={styles.headTitle}>SEO Settings</h3>
									<label htmlFor="seoTitle">SEO Title</label>
									<Field
										id="seoTitle"
										name="seoTitle"
										placeholder="Title"
										className={styles.inp}
									/>

									<label htmlFor="seoDescription">SEO Description</label>
									<Field
										as="textarea"
										id="seoDescription"
										name="seoDescription"
										placeholder="Description"
										className={styles.textarea}
									/>
								</div>
							</div>

							{/* <button
						type="submit"
						className={styles.submitButton}
					>
						Save Product
					</button> */}
						</Form>
					)}
				</Formik>
				<hr />
			</div>
		</Fragment>
	);
};

export default ProductEditForm;
