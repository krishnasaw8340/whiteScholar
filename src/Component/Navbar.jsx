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
  LinkBox,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../img/logo2.svg"
import { Link, useLocation } from "react-router-dom";


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
  const {pathname: url} = useLocation();
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
      <Flex align="center">
        <Heading w='150px'  as="h1" >
        <AspectRatio ratio={10 / 3}>
        <Link to="/">
            <Image  src={logo}></Image>
            </Link>
          </AspectRatio>
        </Heading>
      </Flex>

        
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        justify='center'
        alignItems="center"
        flexGrow={1}
        gap={5}
        mt={{ base: 4, md: 0 }}
        fontSize='lg'
      >
        {links.map(link => (
            <LinkBox key={link.name} transition='all 200ms ease-in' borderBottom={link.url === url && '2px white solid' } _hover={{color:"blue.100", fontSize:"xl"}}>
            <Link  to={link.url}>{link.name}</Link>
            </LinkBox>
        ))}
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "white", color: 'blue.500' }}
        >
          Contribute Now
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
