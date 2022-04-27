import { AspectRatio, Box, Button, Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import pic from "../img/pic.svg"

console.log(pic);

const Home = () => {
    return (
        <Box>
            <Navbar />
            <Box p={4 * 8} pr={8} pl={24}>
                <SimpleGrid columns={[1, 1, 2]}>
                    <Flex direction='column' alignItems='flex-start' spacing={4}>
                        <Text mb={4} fontSize='xl'>
                            Resume, jobs, <Text as='span' color='blue.500' fontWeight='bold'>100+ </Text>Useful Websites and much more....
                        </Text>

                        <Heading mb={4}>
                            Get a Exclusive Student Stuffs<Text> on <Text as='span' color='blue.500' fontWeight='bold'>One </Text>Place</Text>
                        </Heading>

                        <Text mb={4} fontSize='lg'>
                            WhiteScholar is all in one storehouse for students, professionals. It
                            <Text> provides you to Build Resume,  Find a Jobs, Useful Websites, Productivity </Text>
                            <Text> tools like, Music, personal growth. Your are just one step away to Explore </Text>
                            this community. Let's make this community.
                            <Text as='span' color='blue.500' fontWeight='bold'> AWESOME!</Text>
                        </Text>


                        <Flex mt={6}>
                            <Button colorScheme='blue' mr={4}>Explore Now</Button>
                            <Button colorScheme='blue'>Joins Us</Button>
                        </Flex>
                    </Flex>

                    <Box>
                        <Image src={pic}></Image>
                    </Box>

                </SimpleGrid>
            </Box>

            {/* <Box w='200px' h='200px' borderWidth='3px' borderColor ='blue.600'>
            ca

            </Box> */}


        </Box>


    )
}

export default Home