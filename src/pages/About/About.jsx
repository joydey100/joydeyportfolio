import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialIcon from "../../component/SocialIcon/SocialIcon";
import "./About.css";

const About = () => {
  return (
    <section>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box className="float">
            <Box className="about-image"></Box>
          </Box>
          <Typography
            sx={{ fontFamily: "Rubik", fontWeight: "500", mt: 4 }}
            variant="h4"
            color="primary"
          >
            {" "}
            Joy Dey
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h6">
            Front End Developer
          </Typography>
          <Box sx={{ mt: 2 }}>
            {" "}
            <SocialIcon />{" "}
          </Box>

          <Typography sx={{ mt: 4 }} variant="body1">
            Hi, I am Joy, an Enthusiast Front End Developer. I am currently
            studying B.Sc at Jagannath University, Dhaka. I always want to
            explore new knowledge from outside, meet up with different people
            and gather valuable experiences.
            <br /> <br />
            As a Front End Developer, I have adequate knowledge in React,
            Javascript, CSS, HTML, Bootstrap, Tailwind CSS, Material UI, and so
            on. I am also comfortable with Node JS, MongoDB, Express, and
            others. I have a vast interest to build new applications. It makes
            me happy, while I succeed to make fully functional applications for
            my potential clients. My main focus is to give a reliable product
            that can provide value. I have created many projects that will give
            you an idea about my potentiality. I want to grow up as a
            Professional Senior Full Stack Developer with my expertise in the
            near future.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default About;
