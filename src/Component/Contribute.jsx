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

const Contribute = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [content, setcontent] = useState(false);

  const works = () => {
    setcontent(true);
  };
  const works2 = () => {
    setcontent(false);
  };

  return (
    <>
      <Box fontFamily={"'Ubuntu', sans-serif;'"}>
        <Button
          variant="outline"
          _hover={{ bg: "white", color: "blue.500" }}
          _focus={{ bg: "white", color: "blue.500" }}
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
          size="md"
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader id="headContribute">Contribute</DrawerHeader>
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

            <Box pt="30px">
              <DrawerBody
                fontSize="18px"
                fontFamily={"'Ubuntu', sans-serif;'"}
                w="100%"
                border="1px solid black"
              >
                <label>Enter Section</label>
                <Select placeholder="Select option" defaultValue="job" required>
                  <option value="job">Job</option>
                  <option value="website">Website</option>
                  <option value="notes">Notes</option>
                </Select>
                <br />
                <label>Add new content</label>
                <Input placeholder="Add here " required />
                <label>Describe your content</label>
                <Input placeholder="describe your content... " required />
              </DrawerBody>
            </Box>

            <DrawerFooter>
              <Button colorScheme="green">Submit</Button>
            </DrawerFooter>
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
    <Text>Join WhiteScholar, sign In using google.</Text>
    <br />
    <Text> 2._______________</Text>
    <Text>Add new Resource or content here.. !.</Text>
    <br />
    <Text> 3._______________</Text>
    <Text>
      Your content will be reviewed and added to the app, also see yourself in
      contributors.
    </Text>
  </Box>
);
export default Contribute;
