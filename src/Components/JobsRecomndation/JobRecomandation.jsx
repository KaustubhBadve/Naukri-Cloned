import {
	Button,
	Checkbox,
	Heading,
	ScaleFade,
	useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	applyjob,
	getJobsApi,
	removejob,
} from "../../ReduxStore/Jobs/job.action";
import style from "../JobsRecomndation/jobs.module.css";

const JobRecomandation = () => {
	const { isOpen, onToggle } = useDisclosure();

	const [id, setId] = useState();
	const [checked, setChecked] = useState();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state.job);

	//console.log("yes", data);
	useEffect(() => {
		if (data.length === 0) {
			dispatch(getJobsApi());
		}
	}, []);

	useEffect(() => {
		if (id) {
			axios.get(`http://localhost:8080/jobs/${id}`).then((r) => {
				if (checked) {
					dispatch(applyjob(r.data));
				} else {
					dispatch(removejob(r.data));
				}
			});
		}
	}, [id]);

	const checkBoxHandler = (id) => {
		// console.log(id.target.value, id.target.checked);

		setId(id.target.value);
		setChecked(id.target.checked);
	};

	return (
		<div className={style.container}>
			<Heading size="md">
				{" "}
				{data.length} Jobs based on Your Desired Preferences
			</Heading>
			{loading && <div>Loading</div>}

			{error && (
				<div>error... Kindly run json server (data.json) on port 8080</div>
			)}

			{!loading &&
				data.map((p) => (
					<div key={p.id} className={style.JobRecomandation_template}>
						{/* <ScaleFade initialScale={0.9} in={!isOpen}> */}
						<div onClick={checkBoxHandler} className={style.Checkbox}>
							<Checkbox value={p.id}></Checkbox>
						</div>

						<div className={style.JobRecomandation_template_values}>
							<p className={style.JobRecomandation_title}>{p.Requirement}</p>
							<p className={style.JobRecomandation_companyname}>
								{p.Company_name}
							</p>

							<div className={style.year_inf}>
								<ul className={style.year_info}>
									<li>
										<span className={style.jd_experiance}>
											<i className>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
													role="img"
													width="1em"
													height="1em"
													preserveAspectRatio="xMidYMid meet"
													viewBox="0 0 36 36"
												>
													<path
														fill="currentColor"
														d="M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z"
														className="clr-i-outline clr-i-outline-path-1"
													/>
													<path fill="none" d="M0 0h36v36H0z" />
												</svg>
											</i>
											<span className={style.year_info_label}>
												{" "}
												{p.experience}
											</span>
										</span>
									</li>

									<li className>
										<i className> ₹ </i>
										<span className={style.year_info_label}>{p.Salary}</span>
									</li>

									<li className>
										<span className={style.jd_location}>
											<i className>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													aria-hidden="true"
													role="img"
													width="1em"
													height="1em"
													preserveAspectRatio="xMidYMid meet"
													viewBox="0 0 32 32"
												>
													<path
														fill="currentColor"
														d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"
													/>
													<path
														fill="currentColor"
														d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
													/>
												</svg>
											</i>{" "}
											<span className={style.year_info_label}>
												{" "}
												{p.Location}
											</span>
										</span>
									</li>
								</ul>
							</div>
							<p className={style.llipsis}>{p.Jd}</p>
							<p className={style.technology}>{p.Technology}</p>
						</div>
						{/* </ScaleFade> */}

						<div className={style.hide_show}>
							<span onClick={onToggle}>Hide</span>
							<span>Save</span>
						</div>
					</div>
				))}
		</div>
	);
};

export default JobRecomandation;
