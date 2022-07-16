import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL_LOGIN, URL_REGISTER } from "../../Helpers/urls";
import AvatarComp from "../Avatar/Avatar";
import { Flex, Spacer, Box, Button, ButtonGroup } from "@chakra-ui/react";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Flex
      className="Navbar"
      justifyContent="space-between"
      alignItems="center"
      h="8vh"
      zIndex="1000"
    >
      <Box py="1vh">Logo</Box>

      <Spacer />

      <Box py="1vh">
        {token ? (
          <>
            <AvatarComp />
          </>
        ) : (
          <ButtonGroup>
            <Link to={URL_LOGIN}>
              <Button colorScheme="whiteAlpha">Login</Button>
            </Link>
            <Link to={URL_REGISTER}>
              <Button colorScheme="whiteAlpha">Register</Button>
            </Link>
          </ButtonGroup>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
