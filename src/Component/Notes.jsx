import { Box, Button, Flex, Heading, Input,  Text } from '@chakra-ui/react'
import React from 'react'
import { Search2Icon,HamburgerIcon } from '@chakra-ui/icons'

const Notes = () => {
  return (
   <>
   <Box m="0 8% 0  8%">
   <Box pt="30px" textAlign="center">
        <Heading size="xl">
           The Best Hand-Written-Notes on  <br />
          Internet
        </Heading>
        <Text pt="15px">
          The best platform for downloading and uploading notes  <br />
          on the entire internet
          <br /> Feel free to share the available notes.
        </Text>
      </Box>

      <Flex justifyContent="space-around" h="10vh" bgColor="blue.300"> 
    
      <Flex alignItems="center"> <Button>Menu</Button> <HamburgerIcon/> </Flex> 
      <Flex alignItems='center' > <Input placeholder='search' ></Input><Search2Icon/>  </Flex> 
      
    
      <Flex alignItems="center">
      <Text pr="20px">Newest</Text>
      <Text >Oldest</Text>
      </Flex>         
      </Flex>
   </Box>
   
                

   </>
  )
}

export default Notes;