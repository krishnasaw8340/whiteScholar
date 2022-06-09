import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import WebsiteCard from "./WebsiteCard";

const resourceTypes = [
  { type: "online-courses", name: "Online Courses" },
  { type: "programming", name: "Programming" },
  { type: "deployment", name: "Deployment" },
];

const HelpfulWebsites = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <Heading size="2xl">Lorem, ipsum.</Heading>
        <Text mt="15px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Box>

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
