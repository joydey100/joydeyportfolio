import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useProject from "../../hooks/useProject";
import SingleProject from "./SingleProject";
import "./Project.css";

const Projects = () => {
  const [projects] = useProject();

  return (
    <section>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            mb: 5,
            overflow: "hidden",
            textAlign: "center",
            fontFamily: "Rubik",
          }}        
          color="primary"
        >
          {" "}
          My Projects{" "}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {projects?.map((project) => (
              <SingleProject key={project.id} {...project} />
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
