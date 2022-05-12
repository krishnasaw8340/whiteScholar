import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react"
import "../Component/contribute.css"
import Login from "./Login";
import Signup from "./Signup";



const Auth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()



  return (
    <>
      <Box fontFamily={"'Ubuntu', sans-serif;'"}>


        <Button
          variant="outline"
          _hover={{ bg: 'white', color: 'blue.500' }}
          _focus={{ bg: 'white', color: 'blue.500' }}
          ref={btnRef}
          onClick={onOpen}
          
        >
      Login/Signup
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='md'
     
          
        >
          <DrawerOverlay />

          <DrawerContent alignItems="center">
            <DrawerCloseButton />
            <DrawerHeader id="headContribute" >
            Welcome to whiteScholar.!
              </DrawerHeader>
            <Box pt="30px" >
              <DrawerBody fontSize="18px" fontFamily={"'Ubuntu', sans-serif;'"} w="100%" border="1px solid black" 
              > 
                <Login/>
              </DrawerBody>
            </Box>

            <DrawerFooter>
              {/* <Button colorScheme='green'>Login</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}

export default Auth;