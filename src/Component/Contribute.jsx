import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import "../Component/contribute.css";
import { storage } from "../config/firebase";
// import firebase from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Contribute = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [content, setcontent] = useState(false);
  const [type, setType] = useState("job");
  const [JobData, setJobData] = useState();
  const [websiteData, setWebsiteData] = useState();
  const [notesData, setNotesData] = useState();
  const [uploadFile, setUploadFile] = useState();

  // Job Data
  const JobHandleChange = e => {
    setJobData({
      ...JobData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  // Website Data
  const WebsiteHandleChange = e => {
    setWebsiteData({
      ...websiteData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  // Notes Data
  const notesHandleChange = e => {
    setNotesData({
      ...notesData,
      [e.target.value]: e.target.value.trim(),
    });
  };

  const jobSubmit = async e => {
    e.preventDefault();
    const res = await fetch(
      "https://whitescholar-66a1d-default-rtdb.firebaseio.com/job-data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          JobData,
        }),
      }
    );
    if (res) {
      alert("Data is stored: ");
    } else {
      alert("Fill the data");
    }
  };

  const websiteSubmit = async e => {
    e.preventDefault();
    const res = await fetch(
      "https://whitescholar-66a1d-default-rtdb.firebaseio.com/helpful-sites-data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          websiteData,
        }),
      }
    );
    if (res) {
      alert("Data is stored: ");
    } else {
      alert("Fill the data");
    }
  };

  const uploadDataChange = () => {
    if (uploadFile == null) return;
    const imageRef = ref(storage, `Notes/${uploadFile.name + v4()}`);
    uploadBytes(imageRef, uploadFile).then(() => {
      alert("Contribution File is added 👍");
    });
  };
  const returnInputs = type => {
    switch (type) {
      case "job":
        return (
          <>
            <label>1. Job title</label> <br />
            <Input
              type="text"
              label="Job Title"
              id="job-title"
              onChange={JobHandleChange}
              placeholder="enter job title"
              required
              mb={2}
            />{" "}
            <br />
            <label>2. Job Url</label> <br />
            <Input
              type="url"
              label="Job Url"
              id="job-url"
              onChange={JobHandleChange}
              placeholder="enter job url"
              required
              mb={2}
            />{" "}
            <br />
            <label>3. Job location</label> <br />
            <Input
              type="text"
              label="Job Location"
              id="job-location"
              onChange={JobHandleChange}
              placeholder="enter job location"
              required
              mb={2}
            />{" "}
            <br />
            <label>4. Company Name</label> <br />
            <Input
              type="text"
              label="Company Name"
              id="company-name"
              onChange={JobHandleChange}
              placeholder="enter company name"
              required
              mb={2}
            />{" "}
            <br />
            <DrawerFooter>
              {" "}
              <Button onClick={jobSubmit} colorScheme="green">
                Contribute{" "}
              </Button>{" "}
            </DrawerFooter>
          </>
        );
      case "website":
        return (
          <>
            <label>1. Website Name</label> <br />
            <Input
              type="text"
              label="website"
              id="website-name"
              onChange={WebsiteHandleChange}
              placeholder="Enter website name  "
              required
              mb={2}
            />{" "}
            <br />
            <label>2. Enter URL</label> <br />
            <Input
              type="url"
              label="url"
              id="website-url"
              onChange={WebsiteHandleChange}
              placeholder="Enter URL"
              required
              mb={2}
            />{" "}
            <br />
            <label>3. Describe the website</label> <br />
            <Input
              type="text"
              label="Describe"
              id="website-describe"
              onChange={WebsiteHandleChange}
              placeholder="Describe Website Url"
              required
              mb={2}
            />{" "}
            <br />
            <DrawerFooter>
              {" "}
              <Button onClick={websiteSubmit} colorScheme="green">
                Contribute{" "}
              </Button>{" "}
            </DrawerFooter>
          </>
        );
      case "notes":
        return (
          <>
            <label>1. Enter Category or Subject</label> <br />
            <Input
              type="text"
              label="Subject area"
              id="notes-category"
              onChange={notesHandleChange}
              placeholder="Enter Category of notes"
              required
              mb={2}
            />{" "}
            <br />
            <label>
              Upload Your notes here...(doc, docx accepted only )
            </label>{" "}
            <br />
            <Input
              type="file"
              accept=".doc,.docx"
              id="notes-upload"
              onChange={event => {
                setUploadFile(event.target.files[0]);
              }}
              placeholder="Upload your notes.."
              required
            />
            <DrawerFooter>
              {" "}
              <Button onClick={uploadDataChange} colorScheme="green">
                Contribute{" "}
              </Button>{" "}
            </DrawerFooter>
          </>
        );
      default:
        return <></>;
    }
  };

  const works = () => {
    setcontent(true);
  };
  const works2 = () => {
    setcontent(false);
  };

  return (
    <>
      <Box w="100%" fontFamily={"'Ubuntu', sans-serif;'"}>
        <Button
          variant="outline"
          borderColor="blue.500"
          color="blue.500"
          _hover={{ bg: "blue.500", color: "white" }}
          _focus={{ bg: "blue.500", color: "white" }}
          ref={btnRef}
          onClick={onOpen}
        >
          Contribute Now
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          blockScrollOnMount={false}
          size="md"
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader id="headContribute">Contribute</DrawerHeader>

            <DrawerBody
              pt="30px"
              fontSize="18px"
              fontFamily={"'Ubuntu', sans-serif;'"}
              w="100%"
              border="1px solid black"
            >
              <Box mb={8}>
                <Box fontFamily={"'Ubuntu', sans-serif;'"} id="howCss">
                  How it works?
                </Box>
                <Flex>
                  <Button onClick={works} m="0 20px 0 10px" colorScheme="green">
                    Show
                  </Button>

                  <Button onClick={works2} colorScheme="red">
                    close
                  </Button>
                  {content ? null : null}
                </Flex>
                <Box m="7% 10% 0 10%">{content ? <Content /> : null}</Box>
              </Box>

              <Box>
                <label>Enter Section</label>
                <Select
                  placeholder="Select option"
                  defaultValue="job"
                  onChange={e => setType(e.target.value)}
                  required
                >
                  <option value="job">Job</option>
                  <option value="website">Website</option>
                  <option value="notes">Notes</option>
                </Select>
                <br />

                {returnInputs(type)}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
const Content = () => (
  <Box
    border="2px solid"
    borderColor="blue.500"
    p="30px"
    fontSize="18px"
    fontFamily={"'Ubuntu', sans-serif;'"}
    h="40vh"
    w="100%"
  >
    <Text> 1._______________</Text>
    <Text>Enter Section where you want to contribute</Text>
    <br />
    <Text> 2._______________</Text>
    <Text>Add new Resource or content here...</Text>
    <br />
    <Text> 3._______________</Text>
    <Text>Your contribution will be reviewed and added to the website.</Text>
  </Box>
);
export default Contribute;
