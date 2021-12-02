import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import TypeAnimation from "react-type-animation";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Box>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{ display: "flex", justifyContent: "center" }}
                className="float"
              >
                {" "}
                <Box className="banner-image"></Box>
              </Box>
            </Grid>

            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  height: "100%",
                  alignItems: "center",
                }}
                className="mt-4"
              >
                <Box>
                  <Typography variant="h6" color="light">
                    {" "}
                    Hello, I'm{" "}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: "600", fontFamily: "Rubik" }}
                    color="primary"
                  >
                    {" "}
                    Joy Dey{" "}
                  </Typography>
                  <Typography variant="h5">
                    <TypeAnimation
                      cursor={true}
                      sequence={[
                        "Front End Developer",
                        2000,
                        "MERN Stack Developer",
                        2000,
                        "WordPress Developer",
                        2000,
                      ]}
                      repeat={Infinity}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ my: 1, lineHeight: 1.75, color: "#ddd" }}
                  >
                    {" "}
                    An Enthusiastic front end web developer with a deep interest
                    in React and JavaScript. I want to work with modern web
                    technologies for different agenices and grow as a Senior
                    Full Stack Developer.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 1, mr: 1, color: "#111A28", fontWeight: "500" }}
                  >
                    <Link
                      to="/resume.pdf"
                      target="_blank"
                      download
                      style={{ color: "#010D1B" }}
                    >
                      Download resume{" "}
                    </Link>
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ mt: 1, mr: 1, color: "#111A28", fontWeight: "500" }}
                  >
                    <Link to="/projects" style={{ color: "#fff" }}>
                      See Projects
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Banner;
