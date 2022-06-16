import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Body.module.css";
import NaukriFastForward from "./NaukriFastForward";
import NaukriPulse from "./NaukriPulse";
import ProfileCard from "./ProfileCard";
import Qrscanner from "./Qrscanner";
import Jobs from "./Jobs"

const Body = () => {
  return (
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
            <Box mt={'8'}>
              <Text fontSize={"xl"} color='gray.500' fontWeight="bold">Jobs</Text>
            </Box>
            <Jobs/>
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
              border="1px solid red"
              boxShadow={"dark-lg"}
              bg="#fff"
            >
              <Box w="100%" h="70px" borderBottom={"darkgray"} p="6">
                <Text fontSize={"lg"} fontWeight="bold" color={"gray.600"}>
                  FAQ
                </Text>
              </Box>
              <hr />
              <Flex p={"4"} gap="1">
                <Link color={"twitter.700"} fontSize={"sm"}>
                  Click Here
                </Link>
                <Text fontSize={"sm"}>for frequently asked questions.</Text>
              </Flex>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
