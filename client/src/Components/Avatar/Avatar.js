import React, { useState } from "react";
import { Box, Avatar } from "@chakra-ui/react";

export default function AvatarComp() {
  const [menu, setMenu] = useState(0);

  const incMenu = () => setMenu((menu) => menu + 1);
  const DecMenu = () => setMenu((menu) => menu - 1);

  return (
    <>
      <Box
        border="solid 1px red"
        w="50px"
        cursor="pointer"
        onMouseEnter={() => incMenu()}
        onMouseLeave={() => DecMenu()}
      >
        <Avatar size="sm" name="Hardy Hardy" userSelect="none" />

        <Box
          w="150px"
          bg="#1f1f1f"
          className="menu"
          cursor="pointer"
          pos="absolute"
          top="6.5vh"
          right="1.5vw"
          borderRadius="5px"
          hidden={menu <= 0}
          fontSize="0.8rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
          border="solid 1px #2f2f2f"
          color="#bbb"
          py="2"
          lineHeight="1.6rem"
          onMouseEnter={() => incMenu()}
          onMouseLeave={() => DecMenu()}
        >
          <Box w="100%">Username</Box>

          <Box w="100%" h="1px" bg="#2f2f2f" />

          <Box w="100%">Settings</Box>
          <Box w="100%">Logout</Box>
        </Box>
      </Box>
    </>
  );
}
