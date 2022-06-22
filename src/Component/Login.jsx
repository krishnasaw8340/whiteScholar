import { useContext, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { AtSignIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const CFaLock = chakra(FaLock);

const Login = ({ onFormChange, onClose }) => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const onSubmit = e => {
    e.preventDefault();

    const API_URL = "https://white-scholar-admin.herokuapp.com/rest";
    fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          user.setCookie("token", res.token);
          user.setToken(res.token);
          user.setName(res.name);
          toast({
            title: "Logged In Successfully!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose();
          navigate("/");
        } else
          toast({
            title: "Error!",
            description: res.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
      });
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="50vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.500" />
        <Heading color="blue.500">Login </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={onSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<AtSignIcon color="blue.500" />}
                  />
                  <Input
                    value={email}
                    type="email"
                    placeholder="email address"
                    onChange={e => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="blue.500"
                    children={<CFaLock color="blue.500" />}
                  />
                  <Input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link as="button" onClick={onFormChange} color="blue.500">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
