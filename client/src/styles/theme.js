import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        boxSixing: "border-box",
        scrollBehavior: "smooth",
        padding: 0,
        margin: 0,
        width: "100vw",
        minHeight: "100vh",
        fontSize: "25px",
        fontFamily: "Roboto, sans-serif",
        backgroundColor: "#101011",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },
    },
  },
});

export default theme;
