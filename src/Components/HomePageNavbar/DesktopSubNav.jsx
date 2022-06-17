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
  } from "@chakra-ui/react";
  import {
    ChevronRightIcon,
  } from "@chakra-ui/icons";


const DesktopSubNav = ({ label, href, subLabel }) => {
 
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        // _hover={{ bg: useColorModeValue('gray.900') }}
        >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#006cb7' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            // transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            // _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
          </Flex>
        </Stack>
      </Link>
    );
  };

  export default DesktopSubNav;