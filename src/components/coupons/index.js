import React, { useState, useEffect } from "react";
import CouponData from "../../data/couponsData.json";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import DiscountIcon from "../../icons/discountIcon";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/searchIcon";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";

const formatDate = (date) => {
	const d = new Date(date);
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	const year = d.getFullYear();
	return `${month}-${day}-${year}`;
};

const Coupons = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [filteredCoupons, setFilteredCoupons] = useState(CouponData);
	const [selectedCoupons, setSelectedCoupons] = useState([]);
	const [selectAll, setSelectAll] = useState(false);

	const ordersPerPage = 10;

	useEffect(() => {
		let filteredData = CouponData;

		if (statusFilter) {
			filteredData = filteredData.filter(
				(coupon) => coupon.status.toLowerCase() === statusFilter.toLowerCase()
			);
		}

		if (searchTerm) {
			filteredData = filteredData.filter((coupon) =>
				coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (startDate) {
			filteredData = filteredData.filter(
				(coupon) =>
					new Date(formatDate(coupon.duration.start_date)) >=
					new Date(startDate)
			);
		}

		if (endDate) {
			filteredData = filteredData.filter(
				(coupon) =>
					new Date(formatDate(coupon.duration.end_date)) <= new Date(endDate)
			);
		}

		setFilteredCoupons(filteredData);
		setCurrentPage(1);
	}, [statusFilter, searchTerm, startDate, endDate]);

	const indexOfLastOrder = currentPage * ordersPerPage;
	const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
	const currentOrders = filteredCoupons.slice(
		indexOfFirstOrder,
		indexOfLastOrder
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const totalPages = Math.ceil(filteredCoupons.length / ordersPerPage);
	const handlePreviousPage = () => currentPage > 1 && paginate(currentPage - 1);
	const handleNextPage = () =>
		currentPage < totalPages && paginate(currentPage + 1);

	const handleSelectAll = () => {
		if (selectAll) setSelectedCoupons([]);
		else setSelectedCoupons(currentOrders.map((coupon) => coupon.id));
		setSelectAll(!selectAll);
	};

	const handleSelectCoupon = (id) => {
		setSelectedCoupons((prevSelected) =>
			prevSelected.includes(id)
				? prevSelected.filter((couponId) => couponId !== id)
				: [...prevSelected, id]
		);
	};

	const handleDeleteSelected = () => {
		const remainingCoupons = filteredCoupons.filter(
			(coupon) => !selectedCoupons.includes(coupon.id)
		);
		setFilteredCoupons(remainingCoupons);
		setSelectedCoupons([]);
		setSelectAll(false);
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
						<select
							value={statusFilter}
							onChange={(e) => setStatusFilter(e.target.value)}
						>
							<option value={""}>Filter by Status</option>
							<option value={"Active"}>Active</option>
							<option value={"Expired"}>Expired</option>
						</select>
					</div>

					<div className={styles.offsf_search}>
						<label htmlFor="search">
							<SearchIcon />
						</label>
						<input
							type="text"
							id="search"
							placeholder="Search by Code..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>

					<div className={styles.date_filters}>
						<input
							type="date"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
						/>
						<input
							type="date"
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
						/>
					</div>

					<div className={styles.offs_remove}>
						<Link to={""}>
							<EditIcon />
						</Link>
						<button onClick={handleDeleteSelected}>
							<RemoveIcon />
						</button>
					</div>
				</div>

				<table className={styles.order_table}>
					<thead>
						<tr className={styles.order_data_wrapper}>
							<th>
								<input
									type="checkbox"
									checked={selectAll}
									onChange={handleSelectAll}
								/>
								<span>Coupon Name</span>
							</th>
							<th>Usage</th>
							<th>Status</th>
							<th>Date Range</th>
						</tr>
					</thead>

					<tbody>
						{currentOrders.map((coupon) => (
							<tr
								className={styles.order_data_wrapper}
								key={coupon.id}
							>
								<td>
									<input
										type="checkbox"
										checked={selectedCoupons.includes(coupon.id)}
										onChange={() => handleSelectCoupon(coupon.id)}
									/>
									<div className={styles.product_info}>
										<div className={styles.customer_name}>
											<DiscountIcon />
										</div>
										<div className={styles.product_name}>
											<div className={styles.coupon_name}>{coupon.name}</div>
											<span>{coupon.code}</span>
										</div>
									</div>
								</td>
								<td>{coupon.usage} items</td>
								<td>{coupon.status}</td>
								<td>
									{formatDate(coupon.duration.start_date)} -{" "}
									{formatDate(coupon.duration.end_date)}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className={styles.pagination}>
					<button
						onClick={handlePreviousPage}
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
