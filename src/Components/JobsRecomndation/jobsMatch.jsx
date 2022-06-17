import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  Button,
  Box,
  FormLabel,
  Select,
  Flex,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const JobsMatch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <div>
      <span ref={btnRef} onClick={onOpen}>
        <AddIcon w={3} h={4} />
      </span>

      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader size="xs">Manage your Job preferences</DrawerHeader>

          <DrawerBody>
            <Box mt={5}>
              <FormLabel htmlFor="username">
                Preferred Job Role (max 3)
              </FormLabel>
              <Input id="username" placeholder="Enter Preferred Job Role " />
            </Box>

            <Box mt={8}>
              <FormLabel htmlFor="username">Preferred Salary</FormLabel>
              <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="blue" value="1">
                    Indian Rupees
                  </Radio>
                  <Radio colorScheme="blue" value="2">
                    US dollars
                  </Radio>
                </Stack>
              </RadioGroup>{" "}
            </Box>

            <Box mt={8}>
              <Flex>
                <Box spacing={3}>
                  {" "}
                  <Select id="owner" defaultValue="segun">
                    <option>0 Lac</option>
                    <option>1 Lac</option>
                    <option>2 Lacs</option>
                    <option>3 Lacs</option>
                    <option>4 Lacs</option>
                    <option>5 Lacs</option>
                  </Select>
                </Box>
                <Box ml={5}>
                  {" "}
                  <Select id="owner" defaultValue="segun">
                    <option>0 Thousand</option>
                    <option>10 Thousand</option>
                    <option>20 Thousand</option>
                    <option>30 Thousand</option>
                    <option>40 Thousand</option>
                    <option>50 Thousand</option>
                  </Select>
                </Box>
              </Flex>
            </Box>

            <Box mt={5}>
              <FormLabel htmlFor="username">
                Preferred Work Location (max 10)
              </FormLabel>
              <Input placeholder="Enter Preferred Job Loaction " />
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default JobsMatch;
