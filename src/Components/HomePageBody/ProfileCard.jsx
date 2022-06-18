import React from "react";
import styles from "./ProfileCard.module.css";
import { Avatar, Progress } from "@chakra-ui/react";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";

const ProfileCard = () => {
	let userName = JSON.parse(localStorage.getItem("nameUser"));

	return (
		<div className={styles.profileDiv}>
			<div className={styles.avtar}>
				<Avatar size="lg" mt="-10"></Avatar>
			</div>
			<div className={styles.AboutProfile}>
				<p className={styles.userName}>{userName}</p>
				<span className={styles.education}>B.tech, Computer Science</span>
				<br />
				<span>at Indian Institute Of Technology, Delhi</span>
			</div>
			<div className={styles.profileCompleted}>
				<div>
					<span>Profile Completed (Excellent)</span>
					<span style={{ fontSize: "15px" }}>75%</span>
				</div>
				<Progress size="sm" value={75} />
			</div>
			<div className={styles.details}>
				<p>01 Details Missing</p>
				<a href="#">ADD DETAILS</a>
			</div>
			<div className={styles.updateProfile}>
				<button>UPDATE PROFILE</button>
			</div>
			<div className={styles.profilePerformance}>
				<p>
					Profile Performance
					<span style={{ cursor: "pointer" }}>
						<ion-icon name="alert-circle-outline"></ion-icon>
					</span>
				</p>
				<div>
					<div>
						<p>8</p>
						<p>Search Appearances</p>
					</div>
					<div>
						<p>4</p>
						<p>Recruiter Action</p>
					</div>
				</div>
			</div>
			<div className={styles.lastDiv}>
				<span>
					<a href="#">
						3X Boost to Your Profile Performance. Explore.
						<span> Paid Service</span>
					</a>
				</span>
			</div>
		</div>
	);
};

export default ProfileCard;
