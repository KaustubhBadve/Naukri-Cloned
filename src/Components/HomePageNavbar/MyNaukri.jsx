import {
	Box,
	Heading,
	Link,
	Stack,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import DesktopSubNav from "./DesktopSubNav";

const MyNaukri = () => {
	const { isAuth } = useSelector((state) => state.login);
	const myNaukri = [
		{
			label: "Edit Profile",
			href: "#",
		},
		{
			label: "Recomended Jobs",
			href: "#",
		},
		{
			label: "Profile Performance",
			href: "#",
		},
		{
			label: "Recruiter Message",
			href: "#",
		},
		{
			label: "Application Status",
			href: "#",
		},
		{
			label: "Manage Alert",
			href: "#",
		},
		{
			label: "Setting",
			href: "#",
		},
		{
			label: "My Fastforward Services",
			href: "#",
		},
		{
			label: "Logout",
			href: "/",
		},
	];
	return (
		<Box w="100px" h="30px" _hover={{ borderBottom: "3px solid #006cb7" }}>
			<Popover trigger={"hover"} placement={"bottom-end"}>
				<PopoverTrigger>
					<Link
						p={2}
						href={"#"}
						fontSize={"13px"}
						fontWeight={500}
						color={"gray.500"}
						_hover={{
							textDecoration: "none",
							color: "#006cb7",
							align: "center",
						}}
					>
						MY NAUKRI
					</Link>
				</PopoverTrigger>
				<PopoverContent fontSize="14px" bg="#f5f5f5" p={6}>
					<Stack spacing={0}>
						{myNaukri.map((child) => (
							<DesktopSubNav key={child.label} {...child} />
						))}
					</Stack>
				</PopoverContent>
			</Popover>
		</Box>
	);
};

export default MyNaukri;
