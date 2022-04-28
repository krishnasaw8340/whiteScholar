import { AspectRatio, Box, Button, Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import pic from "../img/pic.svg"


const Home = () => {
    return (
        <Box>
            <Box p={4 * 8} pr={8} pl={24}>
                <SimpleGrid columns={{base: 1, md: 2}}>
                    <Flex direction='column' alignItems='flex-start' spacing={4}>
                        <Text mb={4} fontSize='xl' bgGradient='linear(to-l, #9900F0, #46244C)'bgClip='text'
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

                    <Box mt={{base: 12, md: 0}}>
                    <AspectRatio ratio={4 / 3}>
                        <Image src={pic}></Image>
                        </AspectRatio>
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