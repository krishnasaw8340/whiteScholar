import { Box, Center,  Heading,  SimpleGrid,  Spinner,  Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ResumeCard from './ResumeCard'
import { useState } from 'react'



const Notes = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch all the resume from DB
    const API_URL = "https://white-scholar-admin.herokuapp.com/rest";
    fetch(`${API_URL}/resume-templates`)
      .then(res => res.json())
      .then(notes => {
        setNotes([
          ...notes
        ]);
        setLoading(false);
      });
  }, []);

  return (
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


        <Box w="100%" my="5%">
          {loading ? (
            <Center as='div'>
              <Spinner color="#2077ea" />
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap="3%">
              {
                notes.map((item, idx) => (
                  <ResumeCard key={"notes_" + idx} item={item}  />
                ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
  )
}

export default Notes;