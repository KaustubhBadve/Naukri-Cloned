import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Checkout.module.css";

const Navbaronfirmation = () => {
   const navigate= useNavigate();
	return (
		<div className={style.navbar}>
			<div>
				<div className={style.navbarlogo}>
					<img
						onClick={() => navigate("/home")}
						src="https://static.naukimg.com/s/7/123/i/FF-Logo.8e75327b.png"
						alt=""
					/>
				</div>
			</div>
			<div className={style.navbarsub1}>
				<div>1. SHOPPING CART {`   `}</div>
				<div>
					<span>
						<i class="fa-solid fa-check"></i>
					</span>{" "}
					2. LOGIN {`   `}
				</div>
				<div>3. PAYMENT {`   `}</div>
				<div className={style.navbarsub11}>4. Order Confirmation</div>
			</div>

			<div className={style.navbar3}>
				<div className={style.navbarimgdiv}>
					<img
						src="https://static.naukimg.com/s/7/123/i/shield.206b2da7.png"
						alt=""
					/>
				</div>
				<div className={style.navbar4}>
					<p>Buy Safely with Naukri.com</p>
					<p className={style.navbarpara}>We support secure payment methods</p>
				</div>
			</div>
		</div>
	);
};

export default Navbaronfirmation;
