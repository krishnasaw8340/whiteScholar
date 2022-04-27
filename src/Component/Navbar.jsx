import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../img/logo2.svg"
import { Link } from "react-router-dom";


const links = [
    {
        name: "Resume",
        url: "/resume"
    },
    {
        name: "Recent Jobs",
        url: "/recent-jobs"
    },
    {
        name: "Helpful Websites",
        url: "/helpful-websites"
    },
    {
        name: "Personal Growth",
        url: "/personal-growth"
    },
]
const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="blue.500"
      color="white"
      {...props}
    >
      <Flex h='100%' align="center" mr={5}>
        <Heading w='150px'  as="h1" >
        <AspectRatio ratio={10 / 3}>
            <Image  src={logo}></Image>
          </AspectRatio>
        </Heading>
      </Flex>

        
      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ sm: "column", md: "row" }}
        display={{ sm: isOpen ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ sm: 4, md: 0 }}
        fontSize='lg'
      >
        {links.map(link => (
            <Box>
            <Link key={link.name} to={link.url}>{link.name}</Link>
            </Box>
        ))}
      </Stack>

      <Box
        display={{ sm: isOpen ? "block" : "none", md: "block" }}
        mt={{ sm: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Contribute Now
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
