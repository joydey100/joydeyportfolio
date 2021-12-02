import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "60px",
            paddingBottom: "10px",
          }}         
        >
          <SocialIcon />
          <Typography
            sx={{ mt: 3, color: "#ddd", textAlign: "center" }}
            variant="body1"
          >
            {" "}
            Copyright &copy; 2021, All rights reserved by Joy Dey
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
