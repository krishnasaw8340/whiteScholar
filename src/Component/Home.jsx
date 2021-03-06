import {
  AspectRatio,
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import pic from "../img/pic.svg";
import "../Component/home.css";
import "../img/resume.svg";
import tel from "../img/t.svg";
import instagram from "../img/ins.svg";
import discord from "../img/discord.svg";
import resume from "../img/resume.svg";
import job from "../img/job.svg";
import tools from "../img/tools.svg";
import contribute from "../img/contribute.svg";
import websites from "../img/websites.svg";
import join from "../img/joinwithus.svg";

const review = [
  {
    pic: "HP",
    name: "Hrishabh Pant",
    des: "I found this website amazing, it helps me to get perfect job that suit my skill",
  },
  {
    pic: "LR",
    name: "KL Rahul",
    des: "I found this website amazing, it helps me to get perfect job that suit my skill",
  },

  {
    pic: "MS",
    name: "MS Dhoni",
    des: "I found this website amazing, it helps me to get perfect job that suit my skill",
  },
  {
    pic: "R",
    name: "Christiano Ronaldo",
    des: "I found this website amazing, it helps me to get perfect job that suit my skill",
  },
];

const social = [
  {
    header: "Telegram group",
    des: "get me there.!",
    svg: tel,
    link: "https://t.me/+KttWvvGqQDQxMDFl",
    detail: "Join our Private telegram group for cool stuffs",
  },
  {
    header: "Instagram",
    des: "Follow us",
    svg: instagram,
    link: "https://instagram.com/whitescholar1?igshid=YmMyMTA2M2Y=",
    detail: "Follow us on Instagram, for latest tech videos",
  },
  {
    header: "Discord",
    des: "Connect with our Server",
    svg: discord,
    link: "https://discord.gg/tnUXnvGc",
    detail: "Join our server to connect with more creative people",
  },
];
const list = [
  {
    title: "Build Resume",
    des: "It helps you to build professional and ADT proof resume with Awesome templates.",
    svg: resume,
  },
  {
    title: "Recent Jobs Opening",
    des: "It helps you to find a job or internship by locating the new jobs listed based on your location.",
    svg: job,
  },
  {
    title: "Helpful Websites",
    des: "Collection of more than 100+ websites which are highly useful to making things easier.",
    svg: websites,
  },
  {
    title: "Study-Notes",
    des: "A whiteScholar member can share and download hand-written notes and cheat sheets..",
    svg: tools,
  },
  {
    title: "Contribution Section",
    des: "We proudly give access to the Users in whiteScholar, So that they can contribute to grow this community. ",
    svg: contribute,
  },
  {
    title: "Join with us",
    des: "You can be a part of our family by joining our social media groups, where we share some cool hacks that makes your life easier.",
    svg: join,
  },
];
const Home = () => {
  
  return (
      <Box>
        <Box p={4 * 8} pr={{base: 4, md: 8}} pl={{base: 4, md: 24}}>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Flex direction="column" alignItems="flex-start" spacing={4}>
              <Text
                mb={4}
                fontSize="xl"
                fontWeight="bold"
                bgGradient="-webkit-linear-gradient(rgb(255, 82, 24), rgb(24, 142, 246))"
                bgClip="text"
              >
                Resume, jobs, Study-Notes{" "}
                <Box as="span" color="blue.500" fontWeight="bold">
                  100+{" "}
                </Box>
                Useful Websites and much more....
              </Text>
              <Heading mb={4}>
                Get a Exclusive Student Stuffs in{" "}
                <Box as="span" color="blue.500" fontWeight="bold">
                  {" "}
                  One{" "}
                </Box>
                Place
              </Heading>
              <Text mb={4} fontSize="lg">
                WhiteScholar is all in one storehouse for students,
                professionals. It
                <Box as="span">
                  {" "}
                  provides you to Build Resume, Find a Jobs, Useful Websites,
                  Hand-written
                </Box>
                <Box as="span">
                  {" "}
                  notes and cheatsheets. Your are just <br /> one step away to
                  Explore{" "}
                </Box>
                this community. Let's make this community.
                <Box as="span" color="blue.500" fontWeight="bold">
                  {" "}
                  AWESOME!
                </Box>
              </Text>
              <Flex mt={6}>
                <Button as="a" href="#services" colorScheme="blue" mr={4}>
                  Explore Now
                </Button>
                <Button as="a" href="#join-us" colorScheme="blue">
                  Joins Us
                </Button>
              </Flex>
            </Flex>
            <Box mt={{ base: 12, md: 0 }}>
              <AspectRatio ratio={4 / 3}>
                <Image src={pic} className="animation"></Image>
              </AspectRatio>
            </Box>
          </SimpleGrid>
        </Box>

        {/* ABOUT US SECTION  */}

        <Box
          id="services"
          m="0 5% 0 5%"
          border="4px solid "
          borderColor="blue.500"
          borderRadius="10px"
        >
          <Text id="head">Our Services</Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} gap={16}>
            {list.map((item, idx) => (
              <Box
                key={idx}
                mx='10%'
                p={4}
                id="text1"
                borderRadius={4}
                boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1);"
                transition="all 200ms ease-in-out"
                _hover={{
                  transform: "scale(1.1, 1.1)",
                  borderRadius: "9px",
                  borderLeft: "5px solid",
                  borderColor: "blue.500",
                  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.5);",
                }}
              >
                <Stack mx='auto' className="diamond">
                  <AspectRatio h="90px">
                    <Image src={item.svg} mt="30px" id="aboutImg"></Image>
                  </AspectRatio>
                </Stack>
                <Text id="text2" color="blue.700">
                  {item.title}
                </Text>
                <Text id="text3">{item.des}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Customer Review  */}

        <Box m="0 8% 0  8%">
          <Text id="head" mt="10%">
            Testimonials
          </Text>

          <SimpleGrid
            ml="8%"
            gap={5}
            columns={{ base: 1, sm: 2, md: 4, lg: 4 }}
          >
            {review.map((social, idx) => (
              <GridItem key={idx} p={4} mx={{ base: 6, sm: 1 }}>
                <LinkBox
                  w="250px"
                  p={4}
                  borderRadius={8}
                  boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1);"
                  transition="all 200ms ease-in-out"
                  _hover={{
                    transform: "scale(1.1, 1.1)",
                    borderRadius: "9px",
                    borderLeft: "5px solid",
                    borderColor: "blue.500",
                    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.5);",
                  }}
                >
                  <Box w="100%" h="100%" align="center" p="10px">
                    <Box
                      w="26%"
                      h="50px"
                      borderRadius="300px"
                      color="white"
                      bgColor="blue.500"
                    >
                      <Text pt="12px">{social.pic}</Text>
                    </Box>

                    <Text color="blue.500" fontWeight="bold" pl="20px">
                      {social.name}
                    </Text>
                    <Text textColor="black" fontFamily="cursive">
                      {social.des}
                    </Text>
                  </Box>
                </LinkBox>
              </GridItem>
            ))}
          </SimpleGrid>
          <Flex
            float="right"
            fontSize="18px"
            p="10px 0 10px 0"
            color="purple.800"
          >
            
            <Text cursor="pointer">
              Give your Feedback and see yourself in review section....
            </Text>
          </Flex>
        </Box>

        {/* CONTACT US SECTION */}

        <Box id="join-us" m="0 8% 10% 8%">
          <Text id="head" mt="10%">
            Join Our NewsLetter
          </Text>
          <Text textAlign="center" fontSize="17px">
            Never miss any new content, hacks get them right onto your device
          </Text>
          <SimpleGrid m={4} gap={5} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>
            {social.map((social, idx) => (
              <GridItem key={idx} p={4} mx={{ base: 6, sm: 1 }}>
                <LinkBox
                  p={4}
                  borderRadius={8}
                  boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1);"
                  transition="all 200ms ease-in-out"
                  _hover={{
                    transform: "scale(1.1, 1.1)",
                    borderRadius: "9px",
                    borderLeft: "5px solid",
                    borderColor: "blue.300",
                    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.5);",
                  }}
                >
                  <LinkOverlay href={social.link} isExternal>
                    <Flex w="100%" h="100%" align="center" p="10px">
                      <Image src={social.svg}></Image>
                      <Text color="blue.500" fontWeight="bold" pl="20px">
                        {social.des}
                      </Text>
                    </Flex>
                    <Text textColor="blue.700">{social.detail}</Text>
                  </LinkOverlay>
                </LinkBox>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
        <Box id="footer" h="7vh" ml="3%" borderRadius="80px 0 0 0">
          <Flex justifyContent="space-around" alignItems="center">
            <Text
              color="whiteAlpha.700"
              _hover={{ color: "blue.100", fontSize: "xl" }}
              fontSize="18px"
              ml="5%"
            ></Text>
            {/* <Text color="whiteAlpha.900" fontSize="20px" ml="5%">Copyright @2022 whiteScholar</Text> */}
            <Box color="whiteAlpha.900" fontSize="18px" textAlign="center">
              Copyright @2022 whiteScholar
            </Box>
            <Box color="whiteAlpha.900" fontSize="18px" ml="5%">
              All Rights Reserved
            </Box>
          </Flex>
        </Box>
      </Box>
  );
};

export default Home;
