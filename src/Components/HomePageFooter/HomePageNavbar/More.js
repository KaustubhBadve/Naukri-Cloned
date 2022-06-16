import {
  Box,
  Grid,
  GridItem,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import DesktopSubNav from "./DesktopSubNav";

const more = [
  {
    label: "Carrier Tools",
    children: [
      {
        label: "Naukri Blog",
        href: "#",
      },
      {
        label: "FAQ",
        href: "#",
      },
      {
        label: "STUDY ABRAOD",
        href: "#",
      },
      {
        label: "MBA",
        href: "#",
      },
      {
        label: "MS",
        href: "#",
      },
      {
        label: "SOP",
        href: "#",
      },
      {
        label: "GMAT",
        href: "#",
      },
      {
        label: "IELTS",
        href: "#",
      },
    ],
  },
  {
    label: "TOP Exam",
    children: [
      {
        label: "JEE Main",
        href: "#",
      },
      {
        label: "JEE Advanced",
        href: "#",
      },
      {
        label: "BCECE",
        href: "#",
      },
      {
        label: "GATE",
        href: "#",
      },
      {
        label: "CAT",
        href: "#",
      },
      {
        label: "SNAP",
        href: "#",
      },
      {
        label: "MAT",
        href: "#",
      },
      {
        label: "NEET",
        href: "#",
      },
      {
        label: "SBI PO",
        href: "#",
      },
      {
        label: "IBPS PO",
        href: "#",
      },
    ],
  },

  {
    label: "TOP Courses & Collages",
    children: [
      {
        label: "MBA",
        href: "#",
      },
      {
        label: "MBA Collages in India",
        href: "#",
      },
      {
        label: "Top MBA Collages",
        href: "#",
      },
      {
        label: "Engineering",
        href: "#",
      },
      {
        label: "Engineering Collages",
        href: "#",
      },
      {
        label: "TopEngineering Collages",
        href: "#",
      },
      {
        label: "BBA/BBM",
        href: "#",
      },
      {
        label: "BHM",
        href: "#",
      },
      {
        label: "BCA,DCA,BSc CS/IT",
        href: "#",
      },
    ],
  },
];

const More = () => {
  return (
    <Box w="100px" h="30px" _hover={{ borderBottom: "3px solid #006cb7" }}>
      <Popover trigger={"hover"} placement={"bottom-start"}>
        <PopoverTrigger>
          <Link
            p={2}
            href={"#"}
            fontSize={"13px"}
            fontWeight={500}
            color={"gray.500"}
            w="max-content"
            _hover={{
              textDecoration: "none",
              color: "#006cb7",
              align: "center",
            }}
          >
            MORE
          </Link>
        </PopoverTrigger>
        <PopoverContent
          fontSize="13px"
          w="400px"
          h="350px"
          flexWrap="wrap"
          bg="#f5f5f5"
          p={6}
          boxSizing="content-box"
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            // templateRows="250px 1fr 50px"
            // w="50px"
            h="400px"
            gap='-10'
            flexWrap="wrap"
          >
            {more.map((child) => {
              return (
                <GridItem>
                  <Text fontSize="13px" fontWeight={800}>
                    {child.label}
                  </Text>
                  <Stack height="-moz-max-content" spacing={-3}>
                    {child.children.map((item) => {
                      return <DesktopSubNav key={item.label} {...item} />;
                    })}
                  </Stack>
                </GridItem>
              );
            })}
          </Grid>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default More;
