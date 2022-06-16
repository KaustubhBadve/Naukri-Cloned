import { Box, Flex, Image, HStack, Text } from "@chakra-ui/react";
import React from "react";
import style from "./LoginPage.module.css";

const LoginNav = () => {
	return (
		<div>
			<Flex className={style.navbarLoginBox}>
				<Box p="4">
					<Image
						src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
						alt="naukriLogo"
					/>
				</Box>
				<HStack gap="10" px="20">
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">JOBS</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">RECRUITERS</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">COMPANIES</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">TOOLS</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">SERVICES</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">MORE</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">LOGIN</Text>
					<Text cursor="pointer" _hover={{ p:"3",bg:"gray.200",color:"blue" }} fontSize="sm">FOR EMPLOYERS</Text>
				</HStack>
			</Flex>
		</div>
	);
};

export default LoginNav;
