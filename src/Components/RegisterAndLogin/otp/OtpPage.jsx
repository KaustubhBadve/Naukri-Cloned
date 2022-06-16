import React, { useEffect, useState } from "react";
import NavbarRegister from "../NavAndFooter/NavbarRegister";
import FooterRegister from "../NavAndFooter/FooterRegister";
import LeftPane from "../register/LeftPane";
import style from "./OtpPage.module.css";
import {
	Heading,
	Text,
	HStack,
	PinInput,
	PinInputField,
	Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
	const [otpEntered, setOtpEntered] = useState();
	let navigate = useNavigate();

	const sendOtp = () => {
		setTimeout(() => {
			let otp = Math.floor(1000 + Math.random() * 9000);
			localStorage.setItem("OTP", JSON.stringify(otp));
			alert(otp);
		}, 2000);
	};

	useEffect(() => {
		sendOtp();
	}, []);

	useEffect(() => {
		if (otpEntered === localStorage.getItem("OTP")) {
			setTimeout(() => {
				alert("OTP verified!");
			}, 600);
			setTimeout(() => {
				navigate("/employement");
			}, 800);
		}
	}, [otpEntered,navigate]);

	return (
		<div>
			<NavbarRegister />
			<div className={style.otpPanes}>
				<LeftPane />

				<div className={style.otpRightPane}>
					<div className={style.otpRightPaneDiv}>
						<Heading size="xl" mb="10">
							Verify mobile number
						</Heading>

						<Text fontSize="md" mb="5">
							Please enter the OTP sent to mobile number{" "}
							<span>+91 76*****856</span>
						</Text>

						<HStack>
							<PinInput placeholder="" onChange={(e) => setOtpEntered(e)}>
								<PinInputField />
								<PinInputField />
								<PinInputField />
								<PinInputField />
							</PinInput>
						</HStack>

						<Text fontSize="md" mb="5">
							Didn't receive an OTP?{" "}
							<button
								onClick={sendOtp}
								style={{ color: "blue", cursor: "pointer" }}
							>
								Resend
							</button>
						</Text>

						<HStack>
							<Button colorScheme="blue" borderRadius="20px" p="5">
								Verify
							</Button>
							<Button colorScheme="blue" variant="link">
								Skip
							</Button>
						</HStack>
					</div>
					<FooterRegister />
				</div>
			</div>
		</div>
	);
};

export default OtpPage;
