import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Card = (props) => {
  const style = {
    padding: "10px",
    minHeight: "100px",
    minWidth: "100px",
    backgroundColor: "rgba(255,255,255,0.22)",
  };

  return (
    <div style={style}>
      <Text fontSize="md">Daily Reminder to solve DSA</Text>
      <Text fontSize="sm">to : yashnishal@gmail.com</Text>
      <Text fontSize="xs">20th July 2022</Text>
    </div>
  );
};

export default Card;
