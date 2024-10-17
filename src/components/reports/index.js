import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
// import image1 from "../../assets/images/report1.png";
import image2 from "../../assets/images/visits.png";
import image3 from "../../assets/images/online sessions.png";
import img1 from "../../assets/images/table1.png";
import img2 from "../../assets/images/table2.png";
import img3 from "../../assets/images/table3.png";
import img4 from "../../assets/images/table4.png";
import ReactECharts from "echarts-for-react";
// import { LabelLayout } from "echarts/features";
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { TitleComponent, TooltipComponent } from "echarts/components";
import { registerMap } from "echarts/core";

echarts.use([MapChart, TitleComponent, TooltipComponent]);

const option = {
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "shadow",
		},
	},
	legend: {
		left: 0,
		top: 0,
		data: ["Returning customers", "New customers"],
	},

	xAxis: [
		{
			type: "category",
			axisTick: { show: false },
			data: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			axisLine: {
				show: false,
			},
		},
	],
	yAxis: [
		{
			type: "value",
			splitLine: {
				show: true,
				lineStyle: {
					type: "dashed",
				},
			},
		},
	],
	series: [
		{
			barWidth: "8",
			name: "Returning customers",
			type: "bar",
			barGap: 0.5,
			color: "#D7DBEC",
			emphasis: {
				focus: "series",
			},
			data: [320, 332, 301, 334, 390, 344, 222, 239, 173, 375, 473, 452],
			emphasis: {
				itemStyle: {
					barBorderRadius: [50, 50],
				},
				normal: {
					barBorderRadius: [50, 50, 50, 50],
				},
			},
		},
		{
			barWidth: "8",
			color: "#1E5EFF",

			name: "New customers",
			type: "bar",
			emphasis: {
				focus: "series",
			},
			data: [220, 182, 191, 234, 290, 321, 342, 455, 342, 470, 234, 390],
			emphasis: {
				itemStyle: {
					barBorderRadius: [50, 50],
				},
				normal: {
					barBorderRadius: [50, 50, 50, 50],
				},
			},
		},
	],
};

const saleOption = {
	series: [
		{
			name: "Progress",
			type: "pie",
			radius: ["80%", "90%"],
			startAngle: 90,
			endAngle: -270,
			hoverAnimation: false,
			label: {
				show: true,
				position: "center",
				formatter: "88%",
				fontSize: 20,
				color: "#000",
				fontWeight: "bold",
			},
			data: [
				{
					value: 88,
					name: "Progress",
					itemStyle: {
						color: "#FFC700",
					},
				},
				{
					value: 12,
					name: "Remainder",
					itemStyle: {
						color: "#E5E7EB",
					},
				},
			],
		},
	],
};

const saleOption2 = {
	series: [
		{
			name: "Progress",
			type: "pie",
			radius: ["80%", "90%"],
			startAngle: 90,
			endAngle: -270,
			hoverAnimation: false,
			label: {
				show: true,
				position: "center",
				formatter: "25%",
				fontSize: 20,
				color: "#000",
				fontWeight: "bold",
			},
			data: [
				{
					value: 25,
					name: "Progress",
					itemStyle: {
						color: "#1FD286",
					},
					// emphasis: {
					// 	label: {
					// 		show: true,
					// 		formatter: "25%",
					// 		fontSize: 20,
					// 		fontWeight: "bold",
					// 	},
					// },
				},
				{
					value: 75,
					name: "Remainder",
					itemStyle: {
						color: "#E5E7EB",
					},
					// emphasis: {
					// 	label: {
					// 		show: true,
					// 		formatter: "75%",
					// 		fontSize: 20,
					// 		fontWeight: "bold",
					// 	},
					// },
				},
			],
		},
	],
};

const Option1 = {
	xAxis: {
		type: "category",
		data: ["4am", "8am", "12pm", "4pm", "8pm", "Jun 12"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			data: [20, 5, 40, 20, 30, 65, 25, 38],
			type: "line",
		},
	],
};

const Report = () => {
	const [wordmapOption, setWordmapOption] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json"
				);
				const worldJson = await response.json();
				registerMap("world", worldJson);

				setWordmapOption({
					title: {
						text: "World Map",
						left: "center",
					},
					tooltip: {
						trigger: "item",
					},
					series: [
						{
							type: "map",
							map: "world",
							label: {
								show: false,
							},
							roam: true,
							emphasis: {
								label: {
									show: true,
								},
							},
						},
					],
				});
			} catch (error) {
				console.error("Error fetching the world map data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className={styles.report}>
			<MainDashboardHeading
				title={"Reports"}
				fillBtn={true}
				title2={"Export"}
			/>
			<div className={styles.r_customer_growth}>
				<div className={styles.rcg_wrapper}>
					<div className={styles.rcgw_growth}>
						<div className={styles.rcgwg_month}>
							<h5>Customer Growth</h5>
							<span>Last 12 Months</span>
						</div>
						<ReactECharts option={option} />
					</div>
					<div className={styles.rcgw_totleUsers}>
						<div className={styles.rcgwt_existing}>
							<span>Existing Users</span>
							<h6>5.653</h6>
							<p>22.45%</p>
						</div>
						<div className={styles.rcgwt_existing1}>
							<span>New Users</span>
							<h6>1.650</h6>
							<p>15.34%</p>
						</div>
						<div className={styles.rcgwt_totle}>
							<span>Total Visits</span>
							<h6>9.504</h6>
							<p>18.25%</p>
						</div>
						<div className={styles.rcgwt_unique}>
							<span>Unique Visits</span>
							<h6>5.423</h6>
							<p>10.24%</p>
						</div>
					</div>
					<div className={styles.rcgw_conversion}>
						<div className={styles.rcgwc_salesgoal}>
							<h5>Sales Goal</h5>
							<ReactECharts option={saleOption} />
							<div className={styles.rcgwcs_sold}>
								<span>Sold for:</span>
								<p>$15.000</p>
							</div>
							<div className={styles.rcgwcs_sold}>
								<span>Month goal:</span>
								<p>$20.000</p>
							</div>
							<div className={styles.rcgwcs_sold}>
								<span>Left:</span>
								<p>$5.000</p>
							</div>
						</div>
						<div className={styles.rcgwc_rate}>
							<div className={styles.rcgwc_salesgoal}>
								<h5>Conversion Rate</h5>
								<ReactECharts option={saleOption2} />

								<div className={styles.rcgwcs_sold}>
									<span>Cart:</span>
									<p>35%</p>
								</div>
								<div className={styles.rcgwcs_sold}>
									<span>Checkout:</span>
									<p>29%</p>
								</div>
								<div className={styles.rcgwcs_sold}>
									<span>Purchase:</span>
									<p>25%</p>
								</div>
							</div>
						</div>
						<div className={styles.rcgwc_value}>
							<h5>Average Order Value</h5>
							<div className={styles.rcgwcv_month}>
								<p>This Month</p>
								<span>$48.90</span>
								<p>Previous Month</p>
								<span>$48.90</span>
							</div>
							<div>
								<ReactECharts option={Option1} />
							</div>
						</div>
					</div>
					<div className={styles.rcgw_demographi}>
						<div className={styles.rcgwd_image}>
							<ReactECharts option={wordmapOption} />
						</div>
						<div className={styles.rcgwd_visits}>
							<div className={styles.rcgwdv_visits}>
								<img src={image2} />
							</div>
							<div className={styles.rcgwdv_visits}>
								<img src={image3} />
							</div>
						</div>
					</div>
					<div className={styles.rcgw_topCustomer}>
						<div className={styles.drt_recent}>
							<h5>Top Customers</h5>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Orders</th>
										<th>Spent</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className={styles.lee_henry}>
												<span>A</span>
												<span>Lee Henry</span>
											</div>
										</td>
										<td>52</td>
										<td>$969.37</td>
									</tr>
									<tr>
										<td>
											<div className={styles.lee_henry}>
												<span>M</span>
												<span>Myrtie McBride</span>
											</div>
										</td>
										<td>24.05.2023</td>
										<td>$124.97</td>
									</tr>
									<tr>
										<td>
											<div className={styles.lee_henry}>
												<span>T</span>
												<span>Tommy Walker</span>
											</div>
										</td>
										<td>24.05.2023</td>
										<td>$124.97</td>
									</tr>
									<tr>
										<td>
											<div className={styles.lee_henry}>
												<span>K</span>
												<span>Lela Cannon</span>
											</div>
										</td>
										<td>24.05.2023</td>
										<td>$124.97</td>
									</tr>
									<tr>
										<td>
											<div className={styles.lee_henry}>
												<span>S</span>
												<span>Jimmy Cook</span>
											</div>
										</td>
										<td>24.05.2023</td>
										<td>$124.97</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className={styles.drt_productSold}>
							<div className={styles.drt_recent}>
								<h5>Top Products</h5>
								<table className={styles.drtr_table}>
									<tr>
										<th>Name</th>
										<th>Clicks</th>
										<th>Units Sold</th>
									</tr>
									<tr>
										<td className={styles.t_row_img}>
											<span>
												<img src={img1} />
											</span>
											Men Grey Hoodie
										</td>
										<td>$49.90</td>
										<td>204</td>
									</tr>
									<tr>
										<td className={styles.t_row_img}>
											<span>
												<img src={img2} />
											</span>
											Men Grey Hoodie
										</td>
										<td>$49.90</td>
										<td>204</td>
									</tr>
									<tr>
										<td className={styles.t_row_img}>
											<span>
												<img src={img3} />
											</span>
											Men Grey Hoodie
										</td>
										<td>$49.90</td>
										<td>204</td>
									</tr>
									<tr>
										<td className={styles.t_row_img}>
											<span>
												<img src={img4} />
											</span>
											Men Grey Hoodie
										</td>
										<td>$49.90</td>
										<td>204</td>
									</tr>
									<tr>
										<td className={styles.t_row_img}>
											<span>
												<img src={img1} />
											</span>
											Men Grey Hoodie
										</td>
										<td>$49.90</td>
										<td>204</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div className={styles.store_funnel_row}></div>
				</div>
			</div>
		</div>
	);
};
export default Report;
     