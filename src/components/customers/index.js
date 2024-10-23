import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import customers from "../../data/costomres.json";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Customers = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/customerInfomation");
	};
	return (
		<>
			<div className={styles.orders}>
				<MainDashboardHeading
					title={"Products"}
					outlineBtn={true}
					title1={"Export"}
					icon={false}
					fillBtn={true}
					fillTitle={"Add Customer"}
					fillTitleTo={"/addCustomer"}
				/>
				<div className={styles.o_orders_filter}>
					<div className={styles.oof_wrapper}>
						<div className={styles.tabs}>
							<Link to="/">All Customers</Link>
							<Link to="/">New Customers</Link>
							<Link to="/">From Europe</Link>
							<Link to="/">Returning Customers</Link>
						</div>
						<div className={styles.of_filter_search}>
							<div className={styles.offs_filter}>
								<div className={styles.offsf_filter}>
									<select>
										<option>Filter</option>
									</select>
								</div>
								<div className={styles.offsf_search}>
									<label for={"text"}>
										<SearchIcon />
									</label>
									<input
										type="text"
										id="text"
										placeholder="Search..."
									/>
								</div>
							</div>
							<div className={styles.offs_remove}>
								<p>
									<span>
										<EditIcon />
									</span>
									<span>
										<RemoveIcon />
									</span>
								</p>
							</div>
						</div>
						<div className={styles.order_details}>
							<div className={styles.order_details1}>
								<table>
									<tr>
										<th className={styles.od_head_order}>
											<input
												type="checkbox"
												className={styles.od_check}
											/>
											Name
										</th>
										<th>Location</th>
										<th>Orders</th>
										<th>Spent</th>
									</tr>
									{customers.map((item, index) => (
										<tr
											className={styles.row}
											key={index}
											onClick={handleClick}
										>
											<td className={styles.avatarCell}>
												<input
													type="checkbox"
													className={styles.checkbox}
												/>
												<div className={styles.avatar}>{item.name[0]}</div>
												<span className={styles.name}>{item.name}</span>
											</td>
											<td className={styles.city}>{item.city}</td>
											<td className={styles.stock}>{item.orders}</td>
											<td className={styles.price}>${item.spent}</td>
										</tr>
									))}
								</table>
							</div>
						</div>
						<div className={styles.od_pagination}>
							<div className={styles.odp_page}>
								<ul>
									<li>
										<Link>1</Link>
									</li>
									<li>
										<Link>2</Link>
									</li>{" "}
									<li>
										<Link>3</Link>
									</li>{" "}
									<li>
										<Link>4</Link>
									</li>{" "}
									<li>
										<Link>... </Link>
									</li>
									<li>
										<Link>24</Link>
									</li>
								</ul>
							</div>
							<div className={styles.odp_result}>
								<span>274 Results</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Customers;
