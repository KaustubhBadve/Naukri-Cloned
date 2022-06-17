import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./NaukriFastForward.module.css"

const NaukriFastForward = () => {
  return (
    <Box w="100%" h="430px" mt={"6"} p="6" bg={'#fff'}  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" className={styles.fastforward}>
      <Image h={'10'} src="https://static.naukimg.com/s/4/123/i/ffLogo.png" />
      <Text mt={'6'} fontWeight='bold'>Naukri Services you might be interested in</Text>
      <Text mt={'6'} fontWeight='bold'>Be a Priority Applicant</Text>
      <Text w='100%' fontSize={'small'} color='gray.500' fontWeight={'bold'}>Increase your chances of getting shortlisted for the applied jobs and receiving calls from recruiters.</Text>
      <Link float={'right'} color='twitter.500'>Know More</Link>
      <Text mt={'10'} fontSize='sm' fontWeight='bold'>Increase your visibility by up to 3 times</Text>
      <Text w='100%' fontSize={'small'} color='gray.500' fontWeight={'bold'}>Get your profile marked as 'Featured' and get a higher rank when recruiters search for resumes.</Text>
      <Link float={'right'} color='twitter.500'>Know More</Link>
      <Text mt={'8'} fontWeight='bold' fontSize={'sm'} color={'gray.600'}>Call 1800-572-5557 now! (Toll-free)</Text>
    </Box>
  );
};

export default NaukriFastForward;
