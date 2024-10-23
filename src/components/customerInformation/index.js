import React, { Fragment } from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";

const CustomerInformation = () => {
	// const customer = {
	// 	name: "Randhir Kumar",
	// 	country: "India",
	// 	ordersCount: 5,
	// 	customerSince: "2 years",
	// };

	// const orders = [
	// 	{ id: "#23534D", date: "May 25, 3:12 PM", status: "Pending", price: 29.74 },
	// 	{
	// 		id: "#12512B",
	// 		date: "May 10, 2:00 PM",
	// 		status: "Completed",
	// 		price: 23.06,
	// 	},
	// 	{
	// 		id: "#23534D",
	// 		date: "April 18, 8:00 AM",
	// 		status: "Completed",
	// 		price: 29.74,
	// 	},
	// 	{
	// 		id: "#76543E",
	// 		date: "April 12, 8:00 AM",
	// 		status: "Completed",
	// 		price: 23.06,
	// 	},
	// 	{
	// 		id: "#51323C",
	// 		date: "March 25, 8:00 AM",
	// 		status: "Completed",
	// 		price: 29.74,
	// 	},
	// ];

	return (
		<Fragment>
			<div className={styles.customerInformation}>
				<MainDashboardHeading
					title={"Customer Information"}
					outlineBtn={true}
					title1={"Cancel"}
					icon={false}
					icon2={false}
					fillBtn={true}
					fillTitle={"Save"}
				/>
				<div className={styles.container}>
					<div className={styles.leftContainer}>
						<div className={styles.profileCard}>
							<div className={styles.profileHeader}>
								<div className={styles.avatar}>R</div>
								<div>
									<h2 className={styles.name}>Randhir Kumar</h2>
									<p className={styles.info}>India</p>
									<p className={styles.info}>5 Orders</p>
									<p className={styles.info}>Customer for 2 years</p>
								</div>
								<div className={styles.rating}>★★★★★</div>
							</div>
							<hr />
							<div className={styles.notes}>
								<h3>Customer Notes</h3>
								<textarea
									className={styles.textarea}
									placeholder="Add notes about customer"
								/>
							</div>
						</div>

						<div className={styles.orders}>
							<h3>Customer Orders</h3>
							<table className={styles.table}>
								<thead>
									<tr>
										<th>Order</th>
										<th>Date</th>
										<th>Order Status</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>#23534D</td>
										<td>May 25, 3:12 PM</td>
										<td className={styles.pending}>Pending</td>
										<td>$29.74</td>
									</tr>
									<tr>
										<td>#12512B</td>
										<td>May 10, 2:00 PM</td>
										<td className={styles.completed}>Completed</td>
										<td>$23.06</td>
									</tr>
									<tr>
										<td>#23534D</td>
										<td>April 18, 8:00 AM</td>
										<td className={styles.completed}>Completed</td>
										<td>$29.74</td>
									</tr>
									<tr>
										<td>#76543E</td>
										<td>April 12, 8:00 AM</td>
										<td className={styles.completed}>Completed</td>
										<td>$23.06</td>
									</tr>
									<tr>
										<td>#51323C</td>
										<td>April 10, 4:12 PM</td>
										<td className={styles.completed}>Completed</td>
										<td>$23.06</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className={styles.ciOverView}>
						<div className={styles.overview}>
							<h3>Overview</h3>
							<p className={styles.info}>
								Address: Panapur langa, Hajipur, Vaishali, 844124, India
							</p>
							<p className={styles.info}>Email Address: randhirppl@gmail.com</p>
							<p className={styles.info}>Phone: +91 8804789764</p>
							<button className={styles.deleteButton}>Delete Customer</button>
						</div>

						<div className={styles.tags}>
							<h3>Tags</h3>
							<div className={styles.tag}>Vip Customer</div>
							<div className={styles.tag}>Europe</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CustomerInformation;
