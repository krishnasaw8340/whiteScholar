import {
  Flex,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const jobs = [
  {
    title: 'Software Developer 1',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 2',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 3',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 4',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 5',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 5',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 5',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
  {
    title: 'Software Developer 5',
    companyName: 'ABC Compony',
    location: 'XYZ, State, Country',
    url: 'http://www.google.com',
    postedDate: '2022-04-14',
  },
];

const RecentJobs = () => {
  return (
    <SimpleGrid mt={4} gap={4} columns={{ base: 1, sm: 2, md: 3, lg: 4 }}>
      {jobs.map((job, idx) => (
        <GridItem key={idx} p={4} mx={{ base: 8, sm: 2 }}>
          <LinkBox
            p={4}
            borderRadius={8}
            boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1);"
            transition="all 200ms ease-in-out"
            _hover={{
              transform: 'scale(1.1, 1.1)',
              borderRadius: '9px',
              borderLeft: '5px solid',
              borderColor: 'blue.300',
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.5);',
            }}
          >
            <LinkOverlay href={job.url} isExternal>
              <Flex w="100%" h="100%" direction="column" align="flex-start">
                <Text mb={3} color="gray.400">
                  {job.postedDate}
                </Text>
                <Heading as="h3" size="md">
                  {job.title}
                </Heading>
                <Text color="gray.400" fontSize="sm" mb={5}>
                  {job.companyName}
                </Text>
                <Text color="blue.500" fontWeight="bold">
                  {job.location}
                </Text>
              </Flex>
            </LinkOverlay>
          </LinkBox>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default RecentJobs;
