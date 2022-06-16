import React from "react";
import NavbarRegister from "../NavAndFooter/NavbarRegister";
import FooterRegister from "../NavAndFooter/FooterRegister";
import style from "./Employement.module.css";
import {
	Box,
	Heading,
	FormControl,
	FormLabel,
	Input,
	Text,
	InputGroup,
	InputLeftAddon,
	Stack,
	Checkbox,
	Select,
	Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Employement = () => {
	let navigate = useNavigate();
	const routeChange = () => {
		navigate("/education")
	};
	return (
		<div>
			<NavbarRegister />
			<div className={style.EmployementPanes}>
				<Box className={style.EmployementPanesUpper}>
					<Text fontSize="2xl">Employement</Text>
                    <Text>Your experience is your</Text>
                    <Text>success story, talk about it</Text>
				</Box>

				<Box className={style.rightEmployementBox}>
					<Heading size="lg">Add your Employement</Heading>
					<Text fontSize="md" mb="5">
						Employement details help recruiters understand your background
					</Text>

					<FormControl className={style.rightEmployementForm}>
						<div className={style.rightEmployementFormDiv}>
							<div>
								<FormLabel htmlFor="employed">
									Are you currently employed?
								</FormLabel>
								<Stack spacing={5} direction="row">
									<Checkbox colorScheme="green" defaultChecked>
										Yes
									</Checkbox>
									<Checkbox colorScheme="green">No</Checkbox>
								</Stack>
							</div>

							<div>
								<FormLabel htmlFor="experience">
									Total Work Experience
								</FormLabel>
								<Stack spacing={5} direction="row">
									<Select placeholder="0 Year" w="150px">
										<option value="1">1 Year</option>
										<option value="2">2 Years</option>
										<option value="3">3 Years</option>
									</Select>
									<Select placeholder="0 Month" w="150px">
										<option value="1">1 Month</option>
										<option value="2">2 Months</option>
										<option value="3">3 Months</option>
									</Select>
								</Stack>
							</div>

							<div>
								<FormLabel htmlFor="prevCompany">Previous Company</FormLabel>
								<Input id="prevCompany" type="text" placeholder="Eg. Amazon" />
							</div>

							<div>
								<FormLabel htmlFor="prevJob">Previous Job Title</FormLabel>
								<Input
									id="prevJob"
									type="text"
									placeholder="Eg. Software Developer"
								/>
							</div>

							<div>
								<FormLabel htmlFor="city">Current city</FormLabel>
								<Input
									id="city"
									type="text"
									placeholder="Mention the current city you live in"
								/>
							</div>

							<div>
								<FormLabel htmlFor="salary">Annual Salary</FormLabel>
								<InputGroup>
									<InputLeftAddon children="₹" />
									<Input placeholder="Eg. 5,64,000" />
								</InputGroup>
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

export default Employement;
