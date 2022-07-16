import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  const [username, setUsername] = useState("user");

  const loadUserDashboard = () => {
    console.log("dashboard");

    //Use fetch to get user dashboard data from backend like this:
    fetch("http://localhost:5000/api/username", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsername(data.username);
      });
  };

  //   const gridItemBg = "#6f6f6f";
  //   const gridItemBorderColor = "#ffff";
  //   const gridItemBorderWidth = "2px";
  //   const gridItemborderRadius = "0";
  // useEffect(() => {
  //     loadUserDashboard();
  // },[]);

  return (
    <>
      <Grid
        templateAreas={`"header"
                    "main"
                    "footer"`}
        gridTemplateRows={"8vh 81vh 8vh"}
        gridTemplateColumns={"1fr"}
        // h="200px"
        w="100vw"
        gap="2"
        fontWeight="bold"
        px="4vh"
      >
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>

        <GridItem maxH="80vh" area={"main"} px="2vh">
          {/* <Grid h={100} color={"white"} templateColumns={2}>
            <GridItem colSpan={1}> <Card/></GridItem>
            <GridItem colSpan={1}> <Card/></GridItem>
          </Grid> */}
          <Box backgroundColor={"grey"} h="100%" width="100%">
            <Flex
              justify={"space-around"}
              backgroundColor={"gray.900"}
              mx="2"
              //   px="4"
              //   py="2"
              height="100%"
            >
              <Box flex="1" px="2">
                <Box mt="1" as="h4" h="8%" mb={2}>
                  Upcoming
                </Box>
                <Flex
                  flexWrap="wrap"
                  gap={5}
                  overflowY="scroll"
                  maxHeight="90%"
                >
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </Flex>
              </Box>
              <Box flex="1" px="2">
                <Box fontWeight="semibold" as="h4" h="8%" mb={2}>
                  Past
                </Box>
                <Flex
                  flexWrap="wrap"
                  gap={5}
                  overflowY="scroll"
                  maxHeight="90%"
                >
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </GridItem>

        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};
export default Dashboard;
