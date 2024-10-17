import React, { useState } from "react";
import CouponData from "../../data/couponsData.json";
// import Heading from "../heading";
// import Filter from "../filter";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import DiscountIcon from "../../icons/discountIcon";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";

const Coupons = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const ordersPerPage = 10;

	const indexOfLastOrder = currentPage * ordersPerPage;
	const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
	const currentOrders = CouponData.slice(indexOfFirstOrder, indexOfLastOrder);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const totalPages = Math.ceil(CouponData.length / ordersPerPage);

	const handlePriviousPage = () => {
		if (currentPage > 1) {
			paginate(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			paginate(currentPage + 1);
		}
	};

	return (
		<div className={styles.coupons_main}>
			<MainDashboardHeading
				title={"Coupons"}
				outlineBtn={false}
				icon={false}
				fillBtn={true}
				fillTitle={"Create"}
			/>
			<div className={styles.order_footer}>
				<div className={styles.tabs}>
					<Link to="/">All Customers</Link>
					<Link to="/">New Customers</Link>
					<Link to="/">From Europe</Link>
					<Link to="/">Returning Customers</Link>
				</div>
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

				<table className={styles.order_table}>
					<tr className={styles.order_data_wrapper}>
						<th>
							<input type="checkbox" />
							<span>Coupon Name</span>
						</th>
						<th>Usage</th>
						<th>Status</th>
						<th>Date</th>
					</tr>

					{currentOrders.map((value, index) => (
						<tr
							className={styles.order_data_wrapper}
							key={index}
						>
							<td>
								<input type="checkbox" />
								<div className={styles.product_info}>
									<div className={styles.customer_name}>
										<DiscountIcon />
									</div>
									<div className={styles.product_name}>
										<div className={styles.coupon_name}>{value.name} </div>
										<span>{value.code}</span>
									</div>
								</div>
							</td>
							<td>{value.usage} items</td>
							<td>{value.status}</td>
							<td>
								<span>{value.date}</span>
							</td>
						</tr>
					))}
				</table>
				<div className={styles.pagination}>
					<button
						onClick={handlePriviousPage}
						className={currentPage > 1 ? styles.active : ""}
					>
						&#8592;
					</button>
					{Array.from({ length: totalPages }, (_, index) => (
						<button
							key={index}
							onClick={() => paginate(index + 1)}
							className={currentPage === index + 1 ? styles.active : ""}
						>
							{index + 1}
						</button>
					))}
					<button
						onClick={handleNextPage}
						className={currentPage < totalPages ? styles.active : ""}
					>
						&#8594;
					</button>
				</div>
			</div>
		</div>
	);
};

export default Coupons;
