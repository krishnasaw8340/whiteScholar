import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import res1 from '../img/resume.png';
const simple = [
  {
    png: res1,
    title: "Simple Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Simple Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Simple Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Simple Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Simple Resume",
    des: "This resume template is selected in TCS" ,
  },{
    png: res1,
    title: "Simple Resume",
    des: "This resume template is selected in TCS" ,
  }
]

const professional = [
  {
    png: res1,
    title: "Professional Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Professional Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Professional Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Professional Resume ",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Professional Resume",
    des: "This resume template is selected in TCS" ,
  },{
    png: res1,
    title: "Professional Resume",
    des: "This resume template is selected in TCS" ,
  }
]

const modern = [
  {
    png: res1,
    title: "Modern Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Modern Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Modern Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Modern Resume",
    des: "This resume template is selected in TCS" ,
  },
  {
    png: res1,
    title: "Modern Resume",
    des: "This resume template is selected in TCS" ,
  },{
    png: res1,
    title: "Modern Resume",
    des: "This resume template is selected in TCS" ,
  }
]

const Resume = () => {

  const simpleButton =()=>{
    console.log("Simple Button");
    // defaultValue = "true"
  }
  const proButton = ()=>{
    console.log("Pro Button");
    // defaultValue = "true"
  }
  const modernButton =()=>{
    console.log("Modern Button");
    // defaultValue = "true"
  }
  
  return (
    <>
      <Box pt="30px" textAlign="center">
        <Heading size="2xl">
          Job-winning resume <br />
          templates
        </Heading>
        <Text pt="15px">
          Each resume template is expertly designed and follows the exact <br />
          “resume rules” hiring managers look for. Stand out and get hired{' '}
          <br />
          faster with field-tested resume templates.
        </Text>
      </Box>
      <Box w="100%">
        <Flex
          justify="center"
          mx={{ base: 0, sm: 0, md: '80px' }}
          pt="70px"
          gap={{ base: '20px', sm: '20px', md: '95px' }}
        >
          <Button colorScheme="blue" onClick={simpleButton}>Simple</Button>
          <Button colorScheme="blue" onClick={proButton}>Professionals</Button>
          <Button colorScheme="blue" onClick={modernButton}>Modern</Button>
        </Flex>

        {/* Divider Bottom Resume Part */}
        <Box
          my="20px"
          mx={{ base: 0, sm: 0, md: '20%' }}
          borderBottom="2px solid"
          borderColor="#2077ea"
        ></Box>

        <Box mx="20%">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} gap="5%">
            {simple.map((item,index)=>(
              <Box>
              <Image src={item.png}></Image>
              <Text>{item.title}</Text>
              <Text>{item.des}</Text>
            </Box>
            ))}

            
            {professional.map((item,index)=>(
              <Box>
              <Image src={item.png}></Image>
              <Text>{item.title}</Text>
              <Text>{item.des}</Text>
            </Box>
            ))}
          
            {modern.map((item,index)=>(
              <Box>
              <Image src={item.png}></Image>
              <Text>{item.title}</Text>
              <Text>{item.des}</Text>
            </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
