import { AspectRatio, Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import pic from "../img/pic.svg"
import "../Component/home.css"
import "../img/resume.svg"
import tel from "../img/t.svg"
import instagram from "../img/ins.svg"




const Home = () => {
    return (
        <Box>
            <Box p={4 * 8} pr={8} pl={24}>
                <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <Flex direction='column' alignItems='flex-start' spacing={4}>
                        <Text mb={4} fontSize='xl' fontWeight='bold' bgGradient='-webkit-linear-gradient(rgb(255, 82, 24), rgb(24, 142, 246))' bgClip='text'
                        >
                            Resume, jobs, <Box as='span' color='blue.500' fontWeight='bold'>100+ </Box>Useful Websites and much more....
                        </Text>

                        <Heading mb={4}>
                            Get a Exclusive Student Stuffs in <Box as='span' color='blue.500' fontWeight='bold'> One </Box>Place
                        </Heading>

                        <Text mb={4} fontSize='lg'>
                            WhiteScholar is all in one storehouse for students, professionals. It
                            <Box as='span'> provides you to Build Resume,  Find a Jobs, Useful Websites, Productivity </Box>
                            <Box as='span'> tools like, Music, personal growth. Your are just one step away to Explore </Box>
                            this community. Let's make this community.
                            <Box as='span' color='blue.500' fontWeight='bold'> AWESOME!</Box>
                        </Text>


                        <Flex mt={6}>
                            <Button colorScheme='blue' mr={4}>Explore Now</Button>
                            <Button colorScheme='blue'>Joins Us</Button>
                        </Flex>
                    </Flex>

                    <Box mt={{ base: 12, md: 0 }}>
                        <AspectRatio ratio={4 / 3}>
                            <Image src={pic}></Image>
                        </AspectRatio>
                    </Box>

                </SimpleGrid>
            </Box>

           {/* EXPLORE US SECTION  */}
            <Box bgColor='whiteAlpha.400' m="0 5% 0 5%" border="4px solid " borderColor="blue.500" borderRadius="10px">
                <Text id="head">About Us</Text>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} >
                    <Box p="0 20%"id="text1">

                        <Stack className='diamond'></Stack>
                        <Text id='text2'>Build Resume</Text>
                        <Text id='text3'>It helps you to build professional and ADT proof resume with Awesome templates.
                        </Text>
                    </Box>
                    <Box  p="0 20%" id="text1">
                        <Stack className='diamond'>Text here</Stack>
                        <Text id='text2'>Recent Jobs Opening</Text>
                        <Text id='text3'>It helps you to find a perfect job on the basis of your skill.</Text>
                    </Box>
                    <Box  p="0 20%" id="text1" >
                        <Stack className='diamond'>Text here</Stack>
                        <Text id='text2'>Helpful Websites</Text>
                        <Text id='text3'>Collection of more than 100+ websites which are highly useful to make our work easier</Text>
                    </Box>
                    <Box  p="0 20% " id="text1">
                        <Stack className='diamond'>Text here</Stack>
                        <Text id='text2'>Productivity Tool</Text>
                        <Text id='text3'>It helps you by providing productivity tool, such as mellow music, Interview tips.</Text>
                    </Box>
                    <Box  p="0 20%  8%" id="text1">
                        <Stack className='diamond'>Text here</Stack>
                        <Text id='text2'>Contribution Section</Text>
                        <Text id='text3'>We proudly show our Contributors in whiteScholar,There is a contribution section where everyone can contribute to grow this community</Text>
                    </Box>
                    <Box   p="0 20%"id="text1">
                        <Stack className='diamond'>Text here</Stack>
                        <Text id='text2'>Join with us</Text>
                        <Text id='text3'>You can be a part of our family by joining our telegram group, where we share some cool hacks that makes your life easier.</Text>
                    </Box>

                </SimpleGrid>

            </Box>


            {/* CONTACT US SECTION */}

            <Box  textAlign='center' pt='50px' h='100vh'>
                <Text id="head">
                    Join Our NewsLetter
                </Text>
                <Text id='text3'>
                    Never miss any new content, hacks get them right onto your device !.
                </Text>
                
                    <Flex justifyContent='center' pt="50px">
                        <Text id="text2">
                            Telegram group
                        </Text>
                        <Image src={tel} alt="pic "  h="45px" w="45px" p="0 8px 0 8px"></Image>
                        <a href='#'> get me there!</a>
                    </Flex>

                    <Flex justifyContent='center'>
                        <Text id="text2">
                            Follow us on
                        </Text>
                        <Image src={instagram} alt="pic" h="45px" w="45px" p="0 8px 0 8px"></Image>
                        <a href='#'> click here</a>
                    </Flex>
                
                
            </Box>

            


        </Box>


    )
}

export default Home