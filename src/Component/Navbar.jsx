import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Flex,
  useDisclosure,
  Image,
  AspectRatio,
  LinkBox,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../img/logo2.svg';
import { Link, useLocation } from 'react-router-dom';
import Contribute from './Contribute';
import Auth from './Auth';

const links = [
  {
    name: 'Resume',
    url: '/resume',
  },
  {
    name: 'Recent Jobs',
    url: '/recent-jobs',
  },
  {
    name: 'Helpful Websites',
    url: '/helpful-websites',
  },
  {
    name: 'Study-Notes',
    url: '/notes',
  },
];

const Navbar = props => {
  const { pathname: url } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      // bg="blue.500"
      color="white"
      {...props}
      boxShadow='0px 20px 20px -4px rgba(0,0,0,0.5)'
      id="navbg"
      borderRadius="0 5px 5px 10px"
    >
      <Flex align="center">
        <Heading w="150px" as="h1">
          <AspectRatio ratio={10 / 3}>
            <Link to="/">
              <Image src={logo}></Image>
            </Link>
          </AspectRatio>
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        justify="center"
        alignItems="center"
        flexGrow={1}
        gap={5}
        mt={{ base: 4, md: 0 }}
        fontSize="lg"
      >
        {links.map(link => (
          <LinkBox
            key={link.name}
            transition="all 200ms ease-in"
            borderBottom={link.url === url && '2px white solid'}
            _hover={{ color: 'blue.100', fontSize: 'xl' }}
          >
            <Link to={link.url}>{link.name}</Link>
          </LinkBox>
        ))}
      </Stack>


      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Contribute/>
      </Box>
    </Flex>
  );
};

export default Navbar;
