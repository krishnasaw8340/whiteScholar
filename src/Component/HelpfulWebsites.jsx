import {
  Box,
  SimpleGrid,
  Spinner,
  Text,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  setKeyword,
  setFilterBy,
  Center,
  Heading,
  Select
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import WebsiteCard from "./WebsiteCard";
import dayjs from "dayjs";
import { Search2Icon } from "@chakra-ui/icons";

const resourceTypes = [
  { type: "online-courses", name: "Online Courses" },
  { type: "programming", name: "Programming" },
  { type: "deployment", name: "Deployment" },
];

const HelpfulWebsites = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterBy, setFilterBy] = useState("Category");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    // loading all the resources data from DB
    const API_URL = "https://white-scholar-admin.herokuapp.com/rest";
    fetch(`${API_URL}/helpful-websites`)
      .then(res => res.json())
      .then(data => {
        setResources([...data]);
        setLoading(false);
      });
  }, []);

  return (
    <Box pb="5%" mx={{ base: 0, sm: 8, md: 24 }}>
      <Box my="30px" mb="60px" textAlign="center">
        <Heading size="2xl">The Hidden Websites that<br/> you are looking for.</Heading>
        <Text mt="15px">
          The exact website for your work is available only on this page.<br/> All you need to do is just search what you want.<br/> And also you can ask your desire query for particular website.
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
          <option value="title">Category</option>
          <option value="location">Location</option>
          <option value="companyName">Company Name</option>
        </Select>
      </Flex>

      {loading ? (
        <Center>
          <Spinner color="#2077ea" />
        </Center>
      ) : (
        resourceTypes.map(({ type, name }) => (
          <Box key={type} mb={8}>
            <Heading as="h5" mb={4} size="md" borderBottom="2px black solid">
              {name}
            </Heading>
            <SimpleGrid gap={4} columns={{ base: 1, md: 2 }}>
              {resources.map(
                resource =>
                  resource.type === type && (
                    <WebsiteCard key={resource.id} resource={resource} />
                  )
              )}
            </SimpleGrid>
          </Box>
        ))
      )}
    </Box>
  );
};

export default HelpfulWebsites;
