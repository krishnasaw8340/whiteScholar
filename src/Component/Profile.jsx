import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Contribute from "./Contribute";

const Profile = () => {
  const user = useContext(UserContext);

  const logOutUser = () => {
    user.setCookie("token", "");
    user.setToken("");
    user.setName("");
  };

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton as="button">
          <Box as="span" fontSize="xl">
            {user.name}
            <ChevronDownIcon />
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem as="div" textAlign="center">
            <Contribute />
          </MenuItem>
          <MenuDivider />
          <MenuItem
            as="div"
            color="red"
            _hover={{ bg: "red", color: "white" }}
            _focus={{ bg: "red", color: "white" }}
            onClick={logOutUser}
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Profile;
