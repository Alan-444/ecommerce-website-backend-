import React from "react";
import styles from "./style.module.css";
import SettingIcon from "../../icons/settingIcon";
import { Link } from "react-router-dom";
// import DolorIcon from "../../icons/dolorIcon";
// import CartIcon from "../../icons/cartIcon";
import image1 from "../../assets/images/doler.png";
import image2 from "../../assets/images/card1.png";
import image3 from "../../assets/images/chart1.png";
import image4 from "../../assets/images/chart 2.png";
// import banner from "../../assets/images/banner1.png";
import image5 from "../../assets/images/chart 3.png";
import img1 from "../../assets/images/product-small-img1.png";
// import img2 from "../../assets/images/table2.png";
// import img3 from "../../assets/images/table3.png";
// import img4 from "../../assets/images/table4.png";
// import image6 from "../../assets/images/chart4.png";
// import image7 from "../../assets/images/graph1.png";
// import OrdersChart from "../ordersChart";
import ReactECharts from "echarts-for-react";
// import { color } from "echarts";

const Dashboard = () => {
	// const option = {
	// 	xAxis: {
	// 		boundaryGap: false,
	// 		type: "category",
	// 		data: [
	// 			"4am",
	// 			"5am",
	// 			"6am",
	// 			"7am",
	// 			"8am",
	// 			"9am",
	// 			"10am",
	// 			"11am",
	// 			"12pm",
	// 			"1pm",
	// 			"2pm",
	// 			"3pm",
	// 		],
	// 	},
	// 	yAxis: {
	// 		type: "value",
	// 		axisPointer: "doted",
	// 	},
	// 	series: [
	// 		{
	// 			name: "Orders",
	// 			type: "line",
	// 			showSymbol: false,
	// 			data: [10, 15, 10, 25, 34, 30, 30, 34, 50, 44, 25, 25, 35],
	// 			lineStyle: {
	// 				color: "#007bff",
	// 				width: 5,
	// 			},
	// 		},
	// 		{
	// 			name: "Orders (Smoothed)",
	// 			type: "line",
	// 			showSymbol: false,
	// 			data: [8, 12, 18, 28, 34, 25, 28, 30, 32, 30, 25, 22],
	// 			lineStyle: {
	// 				color: "#D9E1EC",
	// 				type: "solid",
	// 				width: 5,
	// 			},
	// 		},
	// 	],
	// };

	const option = {
		grid: {
			top: 20,
			bottom: 20,
		},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: false,
			},
		},
		legend: {
			data: ["Orders", "Orders (Smoothed)"],
		},
		xAxis: {
			boundaryGap: false,
			type: "category",
			data: [
				"4am",
				"5am",
				"6am",
				"7am",
				"8am",
				"9am",
				"10am",
				"11am",
				"12am",
				"1pm",
				"2pm",
				"3pm",
			],
		},
		yAxis: {
			type: "value",
			splitLine: {
				show: true,
				lineStyle: {
					color: ["#cccccc"],
					type: "dashed",
					width: 1,
				},
			},
		},
		series: [
			{
				name: "Orders",
				type: "line",
				showSymbol: false,
				data: [10, 5, 15, 11, 25, 35, 30, 33, 50, 45, 27, 25, 35, 30],
				lineStyle: {
					color: "#007bff",
					width: 5,
				},
			},
			{
				name: "Orders (Smoothed)",
				type: "line",
				showSymbol: false,
				data: [35, 10, 6, 5, 25, 26, 30, 10, 20, 35, 45, 50],
				lineStyle: {
					color: "#D9E1EC",
					type: "solid",
					width: 5,
				},
			},
		],
	};

	const options2 = {
		tooltip: {
			trigger: "axis",
		},
		grid: {
			top: 20,
			bottom: 20,
		},
		xAxis: [
			{
				boundaryGap: false,
				type: "category",
				data: ["12", "13", "14", "15", "16", "17", "18"],
				grid: {
					top: "10%",
					containLabel: true,
				},
				axisLine: {
					show: false,
				},
				axisTick: {
					show: false,
				},
			},
		],
		yAxis: [
			{
				type: "value",
				show: false,
			},
		],
		series: [
			{
				type: "bar",
				barWidth: "8px",
				data: [1000, 4200, 2000, 3400, 2600, 3000, 2000],
				color: "#1FD286",
				itemStyle: {
					normal: {
						barBorderRadius: [50],
					},
				},
			},
		],
	};

	return (
		<>
			<div className={styles.dashboard}>
				<div className={styles.d_wrapper}>
					<div className={styles.dw_header}>
						<div className={styles.dw_title}>Dashboard</div>
						<Link
							to={"#"}
							className={styles.dw_manage}
						>
							<SettingIcon />
							<span>Manage</span>
						</Link>
					</div>
					<div className={styles.dwgi_smallgrafh}>
						<div className={styles.ds_totalreven}>
							<div className={styles.dsr_doler}>
								<h5>$10.540</h5>
								<p>Total Revenue</p>
								<span>22.45%</span>
							</div>
							<div className={styles.dsr_image}>
								<img
									src={image1}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.ds_orders}>
							<div className={styles.dsr_doler}>
								<h5>1,056</h5>
								<p>Orders</p>
								<span>15.34%</span>
							</div>
							<div className={styles.dsr_image}>
								<img
									src={image2}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.ds_unique_visit}>
							<div className={styles.dsr_doler}>
								<p>Unique Visits</p>
								<h5>5.420</h5>
								<span>10.24%</span>
							</div>
							<div className={styles.dsr_image}>
								<img
									src={image3}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.ds_newUsers}>
							<div className={styles.dsr_doler}>
								<p>New Users</p>
								<h5>1.650</h5>
								<span>15.34%</span>
							</div>
							<div className={styles.dsr_image}>
								<img
									src={image4}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.ds_existingUsers}>
							<div className={styles.dsr_doler}>
								<p> Existing Users</p>
								<h5>9.653</h5>
								<span>22.45%</span>
							</div>
							<div className={styles.dsr_image}>
								<img
									src={image5}
									alt=""
								/>
							</div>
						</div>
					</div>

					<div className={styles.dwgi_bigGrafh}>
						<div className={styles.dwgib_bigOrder1}>
							<div className={styles.db_order_over_time}>
								<h5>Orders Over Time</h5>
								<select>
									<option>Last 12 Hours</option>
									<option>Last 12 Hours</option>
									<option>Last 12 Hours</option>
									<option>Last 12 Hours</option>
								</select>
							</div>
							<div className={styles.db_order_month}>
								<div className={styles.dom_month1}>
									<h6>645</h6>
									<p>Orders on May 22</p>
								</div>
								<div className={styles.dom_month2}>
									<h6>472</h6>
									<p>Orders on May 21</p>
								</div>
								<div className={styles.dom_month3}>
									<p>
										<span></span>May 21
									</p>
									<p>
										<span></span>May 21
									</p>
								</div>
							</div>
							<div className={styles.db_chartImage}>
								<ReactECharts option={option} />
							</div>
						</div>
						<div className={styles.dwgib_bigOrder2}>
							<div className={styles.dwb_inner}>
								<h4>Last 7 Days Sales</h4>
								<p className={styles.dwbi_sold}>
									<h5>1,259</h5>
									<span>Items Sold</span>
								</p>
								<p className={styles.dwbi_revenue}>
									<h5>$12,546</h5>
									<span>Revenue</span>
								</p>
								<div className={styles.dwbi_chartImg}>
									<ReactECharts option={options2} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.d_tabel}>
					<div className={styles.d_tabel_box}>
						<div className={styles.d_tabel_title}>
							Top Products by Units Sold
						</div>
						<table className={styles.transactions_data_wrapper}>
							<tr className={styles.td_title}>
								<th>Name</th>
								<th>Date</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
							<tr className={styles.td_data}>
								<td>Jagarnath S.</td>
								<td>24.05.2023</td>
								<td>$124.97</td>
								<td>Paid</td>
							</tr>
							<tr className={styles.td_data}>
								<td>Anand G.</td>
								<td>23.05.2023</td>
								<td>$55.42</td>
								<td>Pending</td>
							</tr>
							<tr className={styles.td_data}>
								<td>Kartik S.</td>
								<td>23.05.2023</td>
								<td>$89.90</td>
								<td>Paid</td>
							</tr>
							<tr className={styles.td_data}>
								<td>Rakesh S.</td>
								<td>22.05.2023</td>
								<td>$144.94</td>
								<td>Pending</td>
							</tr>
							<tr className={styles.td_data}>
								<td>Anup S.</td>
								<td>22.05.2023</td>
								<td>$70.52</td>
								<td>Paid</td>
							</tr>
						</table>
					</div>
					<div className={styles.d_tabel_box}>
						<div className={styles.d_tabel_title}>
							Top Products by Units Sold
						</div>
						<table className={styles.transactions_data_wrapper}>
							<tr className={styles.td_title}>
								<th>Name</th>
								<th>Price</th>
								<th>Units Sold</th>
							</tr>
							<tr className={styles.td_img_data}>
								<td>
									<img
										src={img1}
										alt="product img"
									/>
									Jagarnath S.
								</td>
								<td>$49.90</td>
								<td>204</td>
							</tr>
							<tr className={styles.td_img_data}>
								<td>
									<img
										src={img1}
										alt="product img"
									/>
									Women Striped T-Shirt{" "}
								</td>
								<td>$34.90</td>
								<td>155</td>
							</tr>
							<tr className={styles.td_img_data}>
								<td>
									<img
										src={img1}
										alt="product img"
									/>
									Wome White T-Shirt{" "}
								</td>
								<td>$40.90</td>
								<td>120</td>
							</tr>
							<tr className={styles.td_img_data}>
								<td>
									<img
										src={img1}
										alt="product img"
									/>
									Men White T-Shirt{" "}
								</td>
								<td>$49.90</td>
								<td>204</td>
							</tr>
							<tr className={styles.td_img_data}>
								<td>
									<img
										src={img1}
										alt="product img"
									/>
									Women Red T-Shirt
								</td>
								<td>$34.90</td>
								<td>155</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
