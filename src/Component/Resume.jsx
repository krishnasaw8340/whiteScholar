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

const Resume = () => {
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
          <Button colorScheme="blue">Simple</Button>
          <Button colorScheme="blue">Professionals</Button>
          <Button colorScheme="blue">Modern</Button>
        </Flex>

        {/* Divider Bottom Resume Part */}
        <Box
          my="20px"
          mx={{ base: 0, sm: 0, md: '20%' }}
          borderBottom="2px solid"
          borderColor="blue.500"
        ></Box>

        <Box mx="20%">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} gap="5%">
            <Box>
              <Image src={res1}></Image>
              <Text>London resume</Text>
              <Text> This is the best resume for TCS</Text>
            </Box>

            <Box>
              <Image src={res1}></Image>
              <Text>London resume</Text>
              <Text> This is the best resume for TCS</Text>
            </Box>

            <Box>
              <Image src={res1}></Image>
              <Text>London resume</Text>
              <Text> This is the best resume for TCS</Text>
            </Box>

            <Box>
              <Image src={res1}></Image>
              <Text>London resume</Text>
              <Text> This is the best resume for TCS</Text>
            </Box>

            <Box>
              <Image src={res1}></Image>
              <Text>London resume</Text>
              <Text> This is the best resume for TCS</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
