import React from "react";
import Navbaronfirmation from "./navbarConfirmation";
import style from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePageFooter/Footer";
const Confirmation = () => {
	const navigate = useNavigate();

	const HandleStart = () => {
		navigate("/subscription");
	};
	return (
		<>
			<div>
				<Navbaronfirmation />

				<div className={style.confirmationmain}>
					<div>
						<h1 className={style.confirmation1}>Payment Successfull</h1>
						<div className={style.confirmation2}>
							Order Status : Confirmed ✔
						</div>
						<div className={style.confirmation7}>
							<img
								src="https://static.naukimg.com/s/7/123/i/howItWorksRC.7082ab5e.png"
								alt=""
							/>
						</div>
						<button onClick={() => HandleStart()} className={style.checkbtn33}>
							Lets Start
						</button>
						<div className={style.confirmation3}>
							If opportunity doesn't knock, build a door.
						</div>
					</div>
					<div>
						<div className={style.confirmation4}>⦾ Order Details : </div>
						<div className={style.confirmation5}>
							➼ Plan :{" "}
							<u>
								<i>Platinum Subscription</i>
							</u>{" "}
						</div>
						<div className={style.confirmation6}>➼ Order ID : 345RT32</div>
						<div className={style.confirmation6}>
							➼ Total Paid Amount : ₹ 1,412
						</div>
						<div className={style.confirmation6}>➼ Valid Till : 12 Months</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Confirmation;
