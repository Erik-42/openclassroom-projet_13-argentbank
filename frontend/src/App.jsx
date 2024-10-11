import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/style/root.scss";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Dashboard } from "./pages/dashboard/dashboard";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import Error404 from "./pages/error404/error404";
import ConnectedRoute from "./components/connectedRoutes/connectedRoute";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>} />
				<Route path="/login" element={<Login></Login>} />
				<Route
					path="/dashboard"
					element={
						<ConnectedRoute>
							<Dashboard></Dashboard>
						</ConnectedRoute>
					}
				/>
				<Route path="*" element={<Error404></Error404>} />
			</Routes>
			<Footer></Footer>
			<SpeedInsights />
		</BrowserRouter>
	);
}
