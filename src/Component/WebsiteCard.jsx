import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Flex,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const WebsiteCard = ({ resource }) => {
  return (
    <GridItem id={resource.id} p={4} mx={{ base: 8, sm: 2 }}>
      <LinkBox
        h={{ base: "", md: "200px" }}
        p={4}
        borderRadius={8}
        boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1);"
        transition="all 200ms ease-in-out"
        _hover={{
          transform: "scale(1.1, 1.1)",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.5);",
        }}
      >
        <LinkOverlay href={resource.url} isExternal>
          <Flex w="100%" h="100%" direction="column" align="flex-start">
            <Heading as="h3" mb={2} color="#2077ea" size="md">
              {resource.name} <ExternalLinkIcon />
            </Heading>
            <Text mb={3} fontSize="sm" color="gray.400">
              {resource.description}
            </Text>
          </Flex>
        </LinkOverlay>
      </LinkBox>
    </GridItem>
  );
};

export default WebsiteCard;
