import { StarIcon } from '@chakra-ui/icons'
import { Box, Center, color, Flex, Select, Text, Image, Icon, Button, extendTheme } from '@chakra-ui/react'
import React, { useState } from 'react'
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
import styles from './NaukriPulse.module.css'
import { Link } from 'react-router-dom';


const breakpoints = {
    sm: '401px',
    md: '721px',
  }
const theme = extendTheme({ breakpoints })

const NaukriPulse = () => {

    const [follow1,setFollow1] = useState(false);
    const [follow2,setFollow2] = useState(false);
    const [follow3,setFollow3] = useState(false);

    const [like, SetLike] = useState(false)
    const [dislike, setDislike] = useState(false);


  return (
    <Box className={styles.naukripulse} w={{base:"100%", sm:"100%"}} h="330px" bg={'#fff'} boxShadow='rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' p={'4'}>
        <Flex gap={'2'}>
           <Box h={'6'} w='22' bg={'#fe964f'} color='#fff' p={'1'}>
           <Text  fontSize='10px' fontWeight={'medium'}> NAUKRI PULSE</Text>
           </Box>
           <Text color={'gray.400'} fontSize='13px' fontWeight={'medium'}>Updates in 2 weeks</Text>
        </Flex>
        <Flex justifyContent={'space-between'} mt='4' alignItems={'center'}>
            <Text fontSize={'md'} fontWeight='bold' color={'gray.700'}>Top companies hiring without posting a job!</Text>
            <Select border={'none'} w='32' fontWeight={'bold'}  _hover='twitter.800' fontSize={'xs'} outline={'none'} focusBorderColor='none'  >
                <option value="">Insurance</option>
                <option value="">Agriculture/Dairy</option>
                <option value="">Auto/Ancillary</option>
                <option value="">BPO/ITES</option>
                <option value="">Construction/Engineering/Cement/Metals</option>
                <option value="">Consumer Durable</option>
                <option value="">FMCG/Foods/Bevrages</option>
                <option value="">Insurance</option>
                <option value="">Media/Dotcom/Entertainment</option>
                <option value="">Real State/Property</option>
                <option value="">Retail</option>
                <option value="">Semiconductors/Electronics</option>
                <option value="">Textile/Garments/Accessories</option>
            </Select>
        </Flex>
        <Flex w='100%' h='160px' mt='4' justifyContent={'space-between'}>
            <Box p={'3'} w={'24%'} h='100%' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                <Image h={'12'} src='data:image/png;base64,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' />
                <Text mt={'2'} fontWeight={'bold'} color='gray.600'>Walmart</Text>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'10px'} fontWeight='bold'>4.2</Text> 
                    <Icon fontSize={'10px'} color={'yellow.400'} as={StarIcon}/>
                    <Text fontSize={'10px'}>11217</Text>
                    <Text fontSize={'10px'}>reviews</Text>
                </Flex>
                <Button w={'100%'} h='6' mt={'4'}  bg={follow1 ? "green.200" :'twitter.200'} color={follow1 ? "green.600" :'twitter.800'} borderRadius='none' onClick={()=>setFollow1(!follow1)}>{follow1 ? "Following" : "+Follow"}</Button>
            </Box>
            <Box p={'3'} w={'24%'} h='100%' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                <Image h={'12'} src='data:image/png;base64,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' />
                <Text mt={'2'} fontWeight={'bold'} color='gray.600' fontSize={'13.5px'}>Bata India limited</Text>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'10px'} fontWeight='bold'>4.1</Text> 
                    <Icon fontSize={'10px'} color={'yellow.400'} as={StarIcon}/>
                    <Text fontSize={'10px'}>775</Text>
                    <Text fontSize={'10px'}>reviews</Text>
                </Flex>
                <Button w={'100%'} h='6' mt={'4'}  bg={follow2 ? "green.200" :'twitter.200'} color={follow2 ? "green.600" :'twitter.800'} borderRadius='none' onClick={()=>setFollow2(!follow2)}>{follow2 ? "Following" : "+Follow"}</Button>
            </Box>
            <Box p={'2'} w={'24%'} h='100%' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                <Text  fontSize='14px' fontWeight='medium'>Want to work for top companies?</Text>
                <Text mt={'2'} fontWeight='semibold' color={'gray.500'} fontSize={'10px'}>Stay active on Naukri and recruiters will connect with you directly</Text>
                <Button w={'100%'} h='7' mt={'4'} bg='twitter.600' color={'#fff'} borderRadius='none'>Update Profile</Button>
            </Box>
            <Box p='3' w={'24%'} h='100%' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'>
                <Image h={'12'} src='data:image/jpeg;base64,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m6/QtgxiE+itdSCh6QU2PWphr6bEEi9u2ZTN8p6akiI+hqTq1NiLgFOQYDmCIFbD5jrxFTD6bdGiNq79cwtDalmqhTSTQ2JfDjS/1gKOU1le1eFzblMnlOWPTqVK9aor1KmkdRSqqqiwUXJJ9ZMx9HZVUYVUKCqMU9Y1AlmKVKjO1NiOJ4EDjA2kTX8rzt8RXqIERUR2QqzfWXX9bT+yeybAJrj5LVqYlMQ70gKbMylEK1GBBAV2J4rbs9AgVM5zTEUKlNEpIy1X0ISxBDaGa59HVlbNc1agtNRT11qraEQGy6tJYkseSgKeMrZnlxrPQcNboausi19XUZLejyr+6U87ys1+jem+ipSfWjEXW+llKsO1SGPKBTy3NajV2w1emEqBNalDdHS4BIvxBBIFj3zGvtSwqlTTUoMUMPZW+suXC69PaoJubdl5ksuyuoK7YqvUV6hTQoRSqKlwSAGJNyQOZ7JY1NlRqNVWVav0oV1qaOsF1qWpE9oKgrf0wLjOM8ahXTDqKY1U2fVUfSODBdI8b+6Z2mbgE87dnL3TA5vktSriExCNR6tMoVrUy44sG1CxFuUyqpW1odaaQp1qFNy1uBU34C/YYF9EiIEz5n1ECLREmBFokxAREQEiTEBERAi0mIgJFpMQIi0mIERaTEBIkxASLSYgRFpMQIi0mICIiAkRBgJMiIExIiBMREBERAREQEREBERAREQEREBERAREQEREBERAREQEiTIgJMiTAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEiTIgJMiLQJiJECYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJERASYiAkREAZMRAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=' />
                <Text mt={'2'} fontWeight={'bold'} color='gray.600'>Lifestyle</Text>
                <Flex justifyContent={'space-between'}>
                    <Text fontSize={'10px'} fontWeight='bold'>4.4</Text> 
                    <Icon fontSize={'10px'} color={'yellow.400'} as={StarIcon}/>
                    <Text fontSize={'10px'}>1495</Text>
                    <Text fontSize={'10px'}>reviews</Text>
                </Flex>
                <Button w={'100%'} h='6' mt={'4'} bg={follow3 ? "green.200" :'twitter.200'} color={follow3 ? "green.600" :'twitter.800'} borderRadius='none' onClick={()=>setFollow3(!follow3)}>{follow3 ? "Following" : "+Follow"}</Button>
            </Box>
        </Flex>
        <Flex mt={'4'} gap='3' alignItems={'center'}>
            {
                like || dislike ? <div style={{display:"flex", gap:"5px" , alignItems:"center"}}>
                    <ion-icon style={{color:"green"}} name="checkmark-circle-outline"></ion-icon>
                    <Text fontSize={'xs'} color='gray.600'>Thank You ! get discovered by</Text>
                    <Link style={{color:"#1a94da"}} to="#">Updatting Your Profile</Link>
                </div>
                :
                <>
                <Text fontWeight={'semibold'} color='gray.500' fontSize={'xs'}>Did you find this helpful?</Text>
                <div style={{display:"flex",gap:"10px"}}>
                <ion-icon name="thumbs-up-outline" onClick={() => SetLike(true)}></ion-icon>
                <ion-icon name="thumbs-down-outline" onClick={() => setDislike(true)}></ion-icon>
                </div>
                </> 
            }
        </Flex>

    </Box>
  )
}

export default NaukriPulse