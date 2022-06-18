import {
  Avatar,
  Box,
  Button,
  extendTheme,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import styles from "./Body.module.css";
import NaukriFastForward from "./NaukriFastForward";
import NaukriPulse from "./NaukriPulse";
import ProfileCard from "./ProfileCard";
import Qrscanner from "./Qrscanner";
import Jobs from "./Jobs";
import WithSubnavigation from "../HomePageNavbar/Navbar";
import Footer from "../HomePageFooter/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const Body = () => {
  const ref = useRef();
  ref.current = false;
  const [follow1, setFollow1] = useState(false);
  const [follow2, setFollow2] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <WithSubnavigation/>
      <div className={styles.mainbody}>
        <div className={styles.Topimg}></div>
        <div className={styles.boxes}>
          <p className={styles.searchjob}>Search Jobs</p>
          <div className={styles.contentBoxes}>
            {/* First Box of the body start from herer */}

            <div className={styles.box1}>
              {/* Search Box */}
              <div className={styles.search}>
                <div>
                  <input
                    type="text"
                    placeholder="Search job by Skills,Designation,Companies"
                  />
                  <button>SEARCH</button>
                </div>
                {/* Components */}
              </div>
              <NaukriPulse />
              <Box mt={"6"}>
                <Text fontSize={"xl"} color="gray.500" fontWeight="bold">
                  Jobs
                </Text>
              </Box>
              <Jobs />
              <Box
                h={"150px"}
                w="100%"
                mt={"6"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="#fff"
              >
                <Text color={"gray.700"} p={"4"} fontWeight="bold">
                  New Jobs in My Job Alerts
                </Text>
                <hr />
                <Box w={"max-content"} h="max-content" m={"auto"} mt="4">
                  <Link
                    p={"2"}
                    color={"twitter.500"}
                    fontSize={"md"}
                    m={"auto"}
                  >
                    CREATE CUSTOM JOB ALERTS
                  </Link>
                  <Text
                    fontWeight={"500"}
                    color="gray.500"
                    fontSize={"xs"}
                    textAlign={"center"}
                  >
                    Stay informed about the latest jobs for you
                  </Text>
                </Box>
              </Box>
              <Flex
                w={"100%"}
                h="220px"
                mt={"6"}
                justifyContent="space-between"
              >
                <Box
                  h={"100%"}
                  w="48%"
                  bg="#fff"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Text p={"4"} fontWeight="bold" color={"gray.700"}>
                    Apllication Summary
                  </Text>
                  <hr />
                  <Text
                    p={"5"}
                    fontSize="xs"
                    fontWeight={"medium"}
                    color="gray.500"
                  >
                    Daily Limit of Application: 50
                  </Text>
                </Box>
                <Box
                  h={"100%"}
                  w="48%"
                  bg="#fff"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                >
                  <Text p={"4"} fontWeight="bold" color={"gray.700"}>
                    Saved Job(s)
                  </Text>
                  <hr />

                  <Text
                    p={"5"}
                    fontSize="xs"
                    fontWeight={"medium"}
                    color="gray.500"
                  >
                    You have 0 saved job(s) till now.
                  </Text>
                  <br />
                  <br />
                  <br />
                  <Link float={"right"} mr="4" color={"twitter.600"}>
                    View All
                  </Link>
                </Box>
              </Flex>

              {/* Recruiters */}

              <Text
                mt={"6"}
                fontSize="20px"
                fontWeight="medium"
                color={"gray.600"}
              >
                Recruiters
              </Text>
              <Box
                className={styles.reruiter}
                w={"100%"}
                h="200px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg={"#fff"}
              >
                <Text fontWeight={"medium"} p={"4"}>
                  01 New Recruiter Messages
                </Text>
                <hr />
                <Flex h={"50%"} w="100%" p={"4"} justifyContent="space-between">
                  <Flex gap={"5"} alignItems="center">
                    <Avatar></Avatar>
                    <Box>
                      <Text fontSize={"md"} fontWeight="medium">
                        Amrita Pal
                      </Text>
                      <Text
                        fontSize={"xs"}
                        fontWeight="medium"
                        color="gray.500"
                      >
                        Kaizen IT Services <br /> Pvt. Ltd. Kolkata
                      </Text>
                      <Text fontSize={"10px"} color="gray.500">
                        18 jun 2022
                      </Text>
                    </Box>
                  </Flex>
                  <Box>
                    <Text fontWeight={"medium"}>
                      Kaizen IT Services Pvt. Ltd.
                    </Text>
                    <Text
                      fontSize={"xs"}
                      fontWeight="medium"
                      color={"gray.500"}
                    >
                      Job | Urgent Job Opening for IT Helpdesk in Patna
                    </Text>
                  </Box>
                </Flex>
                <Link float={"right"} color="twitter.600" mr={"4"}>
                  View All
                </Link>
              </Box>

              {/* Recruiter Connections */}
              <Box
                w={"100%"}
                h="260px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg={"#fff"}
                mt="6"
              >
                <Text p={"5"} fontWeight="bold">
                  Recruiter Connections
                </Text>
                <hr />
                <Flex
                  p="5"
                  h={"60%"}
                  w="100%"
                  padding={"8"}
                  justifyContent="space-between"
                >
                  <Stack>
                    <Flex alignItems={"center"} gap="6">
                      <Text fontSize={"4xl"} fontWeight="bold">
                        00
                      </Text>
                      <Text
                        lineHeight={"1"}
                        color="gray.600"
                        fontWeight={"medium"}
                        fontSize="xs"
                      >
                        Credits <br /> Purchased
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap="6">
                      <Text fontSize={"4xl"} fontWeight="bold">
                        00
                      </Text>
                      <Text
                        lineHeight={"1"}
                        color="gray.600"
                        fontWeight={"medium"}
                        fontSize="xs"
                      >
                        Credits <br /> Remaining
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack spacing={"8"}>
                    <Text
                      fontWeight={"medium"}
                      color="gray.600"
                      fontSize={"xs"}
                    >
                      Buy recruiter connections credits to contact more
                      recruiters <br /> hiring in your domain.
                    </Text>
                    <Button
                      w="36"
                      p={"4"}
                      bg="#4a90e2"
                      color={"#eff8fe"}
                      borderRadius="none"
                    >
                      BUY CREDITS
                    </Button>
                  </Stack>
                </Flex>
                <Link float={"right"} color="twitter.600" mr={"4"}>
                  View All
                </Link>
              </Box>

              {/* last box  */}

              <Box
                w={"100%"}
                h="290px"
                mb={"6"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg={"#fff"}
                mt="6"
                className={styles.hirirngDiv}
              >
                <Text p={"5"} fontWeight="bold">
                  Recruiters hiring for candidates like you
                </Text>
                <hr />
                <Flex
                  p={"5"}
                  w="100%"
                  h={"max-content"}
                  justifyContent="space-between"
                >
                  <Flex gap={7}>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWilr4ybvGC-Bx32IzwdzBdLg_J5lzR_5OQ&usqp=CAU"></Avatar>
                    <Stack spacing={"-1"}>
                      <Text fontWeight={"bold"}>Reena</Text>
                      <Text fontSize={"md"} color={"gray.600"}>
                        SVAM POWER PLANT
                      </Text>
                      <Text fontSize={"xs"} color="gray.600">
                        Gurgaon
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex gap={"12"}>
                    <Link fontWeight={"medium"} color="twitter.600">
                      Send Message
                    </Link>
                    <Button
                      borderRadius={"none"}
                      w="32"
                      border="1px solid #1681bf"
                      bg={"#fff"}
                      color="twitter.600"
                      fontWeight={"medium"}
                      onClick={() => setFollow1(!follow1)}
                    >
                      {follow1 ? "Following" : "Follow"}
                    </Button>
                  </Flex>
                </Flex>
                <Flex
                  p={"5"}
                  w="100%"
                  h={"max-content"}
                  justifyContent="space-between"
                >
                  <Flex gap={7}>
                    <Avatar src="data:image/jpeg;base64,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"></Avatar>
                    <Stack spacing={"-1"}>
                      <Text fontWeight={"bold"}>Neha Maan</Text>
                      <Text fontSize={"md"} color={"gray.600"}>
                        IT Recruitment
                      </Text>
                      <Text fontSize={"xs"} color="gray.600">
                        Banglore
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex gap={"12"} alignItems="center">
                    {/* <Button borderRadius={'none'} bg={'twitter.700'} color='#eff8fe' fontWeight={'medium'}>+FOLLOW</Button> */}
                    <Link fontWeight={"medium"} color="twitter.600">
                      Send Message
                    </Link>
                    <Button
                      borderRadius={"none"}
                      w="32"
                      border="1px solid #1681bf"
                      bg={"#fff"}
                      color="twitter.600"
                      fontWeight={"medium"}
                      onClick={() => setFollow2(!follow2)}
                    >
                      {follow2 ? "Following" : "Follow"}
                    </Button>
                  </Flex>
                </Flex>
                <Link float={"right"} color="twitter.600" mr={"4"} onClick={()=>navigate("/recruter")}>
                  View All
                </Link>
              </Box>
            </div>

            {/* Second box of the body start from here */}

            <div className={styles.box2}>
              <ProfileCard />
              <Qrscanner />
              <NaukriFastForward />
              <Box
                mt={"6"}
                w="100%"
                h="120px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                bg="#fff"
              >
                <Box
                  w="100%"
                  h="70px"
                  borderBottom={"darkgray"}
                  p="6"
                  className={styles.faq}
                >
                  <Text fontSize={"lg"} fontWeight="bold" color={"gray.600"}>
                    FAQ
                  </Text>
                </Box>
                <hr />
                <div className={styles.question}>
                  <Flex p={"4"} gap="1">
                    <Link color={"twitter.700"} fontSize={"sm"}>
                      Click Here
                    </Link>
                    <Text fontSize={"sm"}>for frequently asked questions.</Text>
                  </Flex>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
