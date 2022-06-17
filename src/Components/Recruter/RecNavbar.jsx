import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    BellIcon,
  } from "@chakra-ui/icons";
  import Desktopnav from "../HomePageNavbar/Desktopnav";
//   import MyNaukri from "./MyNaukri";
  // import Services from "./Services";
  
  const NAV_ITEMS = [
    {
      label: "JOBS",
      children: [
        {
          label: "Search Jobs",
          href: "#",
        },
        {
          label: "Create Free Job Alert",
          href: "#",
        },
        {
          label: "Jobs By Location",
          href: "#",
        },
        {
          label: "Jobs By Skill",
          href: "#",
        },
        {
          label: "Jobs By Designation",
          href: "#",
        },
        {
          label: "Jobs by Company",
          href: "#",
        },
        {
          label: "Jobs by Category",
          href: "#",
        },
        {
          label: "Browse All Jobs",
          href: "#",
        },
      ],
    },
    {
      label: "RECRUITERS",
      children: [
        {
          label: "Browse All Recruiters",
          href: "#",
        },
        {
          label: "Recruiter Connection",
          href: "#",
        },
        {
          label: "Go to NaukriRecruiter",
          href: "#",
        },
      ],
    },
    {
      label: "COMPANIES",
      children: [
        {
          label: "Browse All Companies",
          href: "#",
        },
        {
          label: "About Companies",
          href: "#",
        },
        {
          label: "Interview Questions",
          href: "#",
        },
        {
          label: "Write Company Reveiw",
          href: "#",
        },
        {
          label: "Write Interview Advice",
          href: "#",
        },
        {
          label: "Company Reviews",
          href: "#",
        },
        {
          label: "Company Salaries",
          href: "#",
        },
      ],
    },
    {
      label: "TOOLS",
      children: [
        {
          label: "Carrier Dashboard",
          href: "#",
        },
        {
          label: "Your Next Carrier Move",
          href: "#",
        },
        {
          label: "Skill Trends",
          href: "#",
        },
        {
          label: "Naukri Labs",
          href: "#",
        },
      ],
    },
    // {
    //   label: "SERVICE",
    //   href: "#",
    // },
    // {
    //   label: "MORE",
    //   href: "#",
    // },
  ];
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");
  
    return (
      <Box w="100%" border="none">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          w="65%"
          m="auto"
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            {/* <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Logo
            </Text> */}
            <Image
              src="https://static.naukri.com/s/4/100/i/naukri_Logo.png"
              alt="Naukri Logo"
            />
  
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Desktopnav NAV_ITEMS={NAV_ITEMS} />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Box>
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
                    }}
                  >
                    <Icon as={BellIcon} w={6} h={6} bg="none"></Icon>
                  </Link>
                </PopoverTrigger>
                <PopoverContent bg="#f5f5f5">
                  <Stack spacing={6} p="6">
                    <Link _hover={{ color: "#006cb7" }}>
                      Job Recomondetations
                    </Link>
                    <Box _hover={{ color: "#006cb7" }}>
                      <Box display='flex' justifyContent='space-between'>
                        <Link>
                          Pending Actions{" "}
                        </Link>
                        <Text>{0}</Text>
                      </Box>
                      <Text
                        style={{ marginTop: "-5px", fontSize: "11px" }}
                      >
                        Update Project Dteails
                      </Text>
                    </Box>
                    <Box _hover={{ color: "#006cb7" }}>
                      <Box display='flex' justifyContent='space-between'>
                        <Link>
                        Recommended Skill
                        </Link>
                        <Text>{6}</Text>
                      </Box>
                      <Text
                        style={{ marginTop: "-5px", fontSize: "11px" }}
                      >
                        Administration
                      </Text>
                    </Box>
                    <Box _hover={{ color: "#006cb7" }}>
                      <Box display='flex' justifyContent='space-between'>
                        <Link>
                        Reruiter Searches
                        </Link>
                        <Text>{18}</Text>
                      </Box>
                    </Box>
                  </Stack>
                </PopoverContent>
              </Popover>
            </Box>
            {/* <MyNaukri /> */}
          </Stack>
        </Flex>
      </Box>
    );
  }
  
  // const MobileNav = () => {
  //   return (
  //     <Stack
  //       bg={useColorModeValue('white', 'gray.800')}
  //       p={4}
  //       display={{ md: 'none' }}>
  //       {NAV_ITEMS.map((navItem) => (
  //         <MobileNavItem key={navItem.label} {...navItem} />
  //       ))}
  //     </Stack>
  //   );
  // };
  
  // const MobileNavItem = ({ label, children, href }: NavItem) => {
  //   const { isOpen, onToggle } = useDisclosure();
  
  //   return (
  //     <Stack spacing={4} onClick={children && onToggle}>
  //       <Flex
  //         py={2}
  //         as={Link}
  //         href={href ?? '#'}
  //         justify={'space-between'}
  //         align={'center'}
  //         _hover={{
  //           textDecoration: 'none',
  //         }}>
  //         <Text
  //           fontWeight={600}
  //           color={useColorModeValue('gray.600', 'gray.200')}>
  //           {label}
  //         </Text>
  //         {children && (
  //           <Icon
  //             as={ChevronDownIcon}
  //             transition={'all .25s ease-in-out'}
  //             transform={isOpen ? 'rotate(180deg)' : ''}
  //             w={6}
  //             h={6}
  //           />
  //         )}
  //       </Flex>
  
  //       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
  //         <Stack
  //           mt={2}
  //           pl={4}
  //           borderLeft={1}
  //           borderStyle={'solid'}
  //           borderColor={useColorModeValue('gray.200', 'gray.700')}
  //           align={'start'}>
  //           {children &&
  //             children.map((child) => (
  //               <Link key={child.label} py={2} href={child.href}>
  //                 {child.label}
  //               </Link>
  //             ))}
  //         </Stack>
  //       </Collapse>
  //     </Stack>
  //   );
  // };
  