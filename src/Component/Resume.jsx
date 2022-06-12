import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  const [simpleResumes, setSimpleResumes] = useState([]);
  const [proResumes, setProResumes] = useState([]);
  const [modernResumes, setModernResumes] = useState([]);
  const [isSimpleChecked, setIsSimpleChecked] = useState(true);
  const [isProChecked, setIsProChecked] = useState(true);
  const [isModernChecked, setIsModernChecked] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch all the resume from DB
    const API_URL = "https://white-scholar-admin.herokuapp.com/rest";
    fetch(`${API_URL}/resume-templates`)
      .then(res => res.json())
      .then(resumes => {
        setSimpleResumes([
          ...resumes.filter(resume => resume.type === "simple" && resume),
        ]);
        setProResumes([
          ...resumes.filter(resume => resume.type === "professional" && resume),
        ]);
        setModernResumes([
          ...resumes.filter(resume => resume.type === "modern" && resume),
        ]);

        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box pt="30px" textAlign="center">
        <Heading size="2xl">
          Job-winning resume <br />
          templates
        </Heading>
        <Text pt="15px">
          Each resume template is expertly designed and follows the exact <br />
          “resume rules” hiring managers look for. Stand out and get hired{" "}
          <br />
          faster with field-tested resume templates.
        </Text>
      </Box>

      <Box w="100%" pb="10%">
        <Flex
          justify="center"
          mx={{ base: 0, sm: 0, md: "80px" }}
          pt="70px"
          gap={{ base: "20px", sm: "20px", md: "95px" }}
        >
          <Button
            colorScheme={isSimpleChecked ? "twitter" : "blackAlpha"}
            onClick={() => setIsSimpleChecked(state => !state)}
          >
            Simple
          </Button>
          <Button
            colorScheme={isProChecked ? "twitter" : "blackAlpha"}
            onClick={() => setIsProChecked(state => !state)}
          >
            Professionals
          </Button>
          <Button
            colorScheme={isModernChecked ? "twitter" : "blackAlpha"}
            onClick={() => setIsModernChecked(state => !state)}
          >
            Modern
          </Button>
        </Flex>

        {/* Divider Bottom Resume Part */}
        <Box
          my="20px"
          mx={{ base: 0, sm: 0, md: "20%" }}
          borderBottom="2px solid"
          borderColor="#2077ea"
        ></Box>

        <Box mx={{ base: "15%", md: "20%" }}>
          {loading ? (
            <Center>
              <Spinner color="#2077ea" />
            </Center>
          ) : (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} gap="3%">
              {isSimpleChecked &&
                simpleResumes.map((item, idx) => (
                  <ResumeCard key={"simple" + idx} item={item} />
                ))}

              {isProChecked &&
                proResumes.map((item, idx) => (
                  <ResumeCard key={"pro" + idx} item={item} />
                ))}

              {isModernChecked &&
                modernResumes.map((item, idx) => (
                  <ResumeCard key={"modern" + idx} item={item} />
                ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
