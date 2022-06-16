import React from "react";
import NavbarRegister from "../NavAndFooter/NavbarRegister";
import FooterRegister from "../NavAndFooter/FooterRegister";
import style from "./Education.module.css";
import {
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Text,
	Stack,
	Checkbox,
	Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Education = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		navigate("/login")
	};

	return (
		<div>
			<NavbarRegister />
			<div className={style.EducationPanes}>
				<Box className={style.EducationPanesUpper}>
					<Text fontSize="2xl">Education</Text>
					<Text>Employers prefer to</Text>
					<Text>know about your education</Text>
				</Box>

				<Box className={style.rightEducationBox}>
					<Heading size="lg">Mention your Education</Heading>
					<Text fontSize="md" mb="5">
						Adding education details will help recruiters know your value as a
						potential candidate
					</Text>

					<FormControl className={style.rightEducationForm}>
						<div className={style.rightEducationFormDiv}>
							<div>
								<FormLabel htmlFor="qualification">
									Highest Qualification
								</FormLabel>
								<Stack spacing={5} direction="row">
									<Checkbox colorScheme="green" defaultChecked>
										Graduation/Diploma
									</Checkbox>
									<Checkbox colorScheme="green">Masters</Checkbox>
									<Checkbox colorScheme="green">High School</Checkbox>
								</Stack>
							</div>

							<div>
								<FormLabel htmlFor="course">Course</FormLabel>
								<Input id="course" type="text" placeholder="Eg. BSc" />
							</div>

							<div>
								<FormLabel htmlFor="specialize">Specialization</FormLabel>
								<Input
									id="specialize"
									type="text"
									placeholder="Eg. Electronics"
								/>
							</div>

							<div>
								<FormLabel htmlFor="uni">University/Institute</FormLabel>
								<Input id="uni" type="text" placeholder="Eg. NIT" />
							</div>

							<div>
								<FormLabel htmlFor="courseType">Course Type</FormLabel>
								<Stack spacing={5} direction="row">
									<Checkbox colorScheme="green" defaultChecked>
										Full-Time
									</Checkbox>
									<Checkbox colorScheme="green">Part-Time</Checkbox>
								</Stack>
							</div>

							<div>
								<FormLabel htmlFor="passYear">Passing Year</FormLabel>
								<Input id="passYear" type="number" placeholder="Eg. 2020" />
							</div>

							<div>
								<Button colorScheme="blue" onClick={routeChange}>Save and Continue</Button>
							</div>
						</div>
					</FormControl>

					<FooterRegister />
				</Box>
			</div>
		</div>
	);
};

export default Education;
