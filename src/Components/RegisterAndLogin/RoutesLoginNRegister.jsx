import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import OtpPage from "./otp/OtpPage";
import RegisterPage from "./register/RegisterPage";
import Employement from "./employement/Employement";
import Education from "./education/Education";

const RoutesLoginNRegister = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/otp" element={<OtpPage />} />
				<Route path="/employement" element={<Employement />} />
				<Route path="/education" element={<Education />} />
			</Routes>
		</div>
	);
};

export default RoutesLoginNRegister;
