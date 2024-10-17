import { Route, Routes } from "react-router-dom";
import ComfirmaEmail from "./components/confirmaEmail";
import CreateAccount from "./components/creactAccount";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import PasswordReset from "./components/passwordReset";
import RegistrationComplete from "./components/registrationomplete";
import Layout from "./layout";
import Orders from "./components/orders";
import DeleteItem from "./components/deleteItem";
import Products from "./components/products";
import Categories from "./components/categories";
import CategoriesEdit from "./components/categeriesEdit/insex";
import Customers from "./components/customers";
import CustomerInformation from "./components/customerInformation";
import Coupons from "./components/coupons";
import KnowledgeBase from "./components/knowledgeBase";
import Article from "./components/article";
import Report from "./components/reports";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Dashboard />}
					/>
					<Route
						path="dashboard"
						element={<Dashboard />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/passwordReset"
						element={<PasswordReset />}
					/>
					<Route
						path="/registrationComplete"
						element={<RegistrationComplete />}
					/>
					<Route
						path="/createAccount"
						element={<CreateAccount />}
					/>
					<Route
						path="/comfirmaEmail"
						element={<ComfirmaEmail />}
					/>
					<Route
						path="/orders"
						element={<Orders />}
					/>
					<Route
						path="/deleteItem"
						element={<DeleteItem />}
					/>
					<Route
						path="/products"
						element={<Products />}
					/>
					<Route
						path="/categories"
						element={<Categories />}
					/>
					<Route
						path="/categoriesEdit"
						element={<CategoriesEdit />}
					/>
					<Route
						path="/customers"
						element={<Customers />}
					/>
					<Route
						path="/customerInfomation"
						element={<CustomerInformation />}
					/>
					<Route
						path="/coupons"
						element={<Coupons />}
					/>
					<Route
						path="/knowledgeBase"
						element={<KnowledgeBase />}
					/>
					<Route
						path="/article"
						element={<Article />}
					/>
					<Route
						path="/reports"
						element={<Report />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
