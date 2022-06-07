import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  LinkBox,
  LinkOverlay,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import { Search2Icon } from "@chakra-ui/icons";

const filterJobs = (jobs, keyword, searchBy) => {
  return jobs.filter(job =>
    job[searchBy].toLowerCase().includes(keyword.toLowerCase())
  );
};

const RecentJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filterBy, setFilterBy] = useState("title");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // loading all the jobs data from DB
    const API_URL = "https://white-scholar-admin.herokuapp.com/rest";
    fetch(`${API_URL}/jobs`)
      .then(res => res.json())
      .then(data => setJobs([...data]));

    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Box>
      <Box my="30px" textAlign="center">
        <Heading size="2xl">
          Find your dream job <br />
          in one place
        </Heading>
        <Text mt="15px">
          We make it easy to find your dream job - <br />
          regardless of your location.
        </Text>
      </Box>

      <Flex
        flexDir={{ base: "column", sm: "row" }}
        justify="space-evenly"
        align="center"
        gap={2}
        mb="30px"
        mx={{ base: 8, md: 24 }}
        p={4}
        borderRadius={8}
        boxShadow="0px 0px 35px -3px rgba(0,0,0,0.4);"
      >
        <InputGroup flexBasis="70%">
          <InputLeftElement children={<Search2Icon color="gray.600" />} />
          <Input
            type="text"
            placeholder="Search"
            borderColor="gray.600"
            onChange={e => setKeyword(e.target.value)}
          />
        </InputGroup>
        <Select
          flexBasis="25%"
          borderColor="gray.600"
          onChange={e => setFilterBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="location">Location</option>
          <option value="companyName">Company Name</option>
        </Select>
      </Flex>

      <SimpleGrid
        mx={{ base: 0, sm: 8, md: 24 }}
        gap={4}
        columns={{ base: 1, sm: 2, lg: 3 }}
      >
        {loading ? (
          <Center w="85vw">
            <Spinner color="#2077ea" />
          </Center>
        ) : (
          filterJobs(jobs, keyword, filterBy).map((job, idx) => (
            <GridItem key={idx} p={4} mx={{ base: 8, sm: 2 }}>
              <LinkBox
                h="180px"
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
                <LinkOverlay href={job.url} isExternal>
                  <Flex w="100%" h="100%" direction="column" align="flex-start">
                    <Text mb={3} color="gray.400">
                      {dayjs(job.postedDate).format("DD-MM-YYYY")}
                    </Text>
                    <Heading as="h3" size="md">
                      {job.title}
                    </Heading>
                    <Text color="gray.500" fontSize="sm" mb={5}>
                      {job.companyName}
                    </Text>
                    <Text color="blue.500" fontWeight="bold">
                      {job.location}
                    </Text>
                  </Flex>
                </LinkOverlay>
              </LinkBox>
            </GridItem>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default RecentJobs;
