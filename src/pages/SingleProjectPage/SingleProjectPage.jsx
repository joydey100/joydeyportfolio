import {
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "../../hooks/useProject";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Footer from "../../component/Footer/Footer";

const SingleProjectPage = () => {
  const { id } = useParams();
  const [projects] = useProject();
  const [singleProject, setSingleProject] = useState({});

  useEffect(() => {
    if (projects.length > 0) {
      const singleProject = projects.find(
        (project) => project.id === parseInt(id)
      );
      setSingleProject(singleProject);
    }
  }, [id, projects]);

  return (
    <>
      <section>
        <Container>
          <Box>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Typography
                variant="h4"
                color="primary"
                gutterBottom
                sx={{ fontWeight: "600" }}
              >
                {singleProject.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {singleProject.desc}
              </Typography>
            </Box>

            {/* Links */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href={singleProject.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: "block" }}
              >
                <Tooltip title="Github Code Link">
                  <IconButton color="primary">
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </a>
              <a
                href={singleProject.link}
                target="_blank"
                rel="noreferrer"
                style={{ display: "block" }}
              >
                <Tooltip title="Live Website Link">
                  <IconButton color="primary">
                    <LinkIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </Box>

            <Box sx={{ my: 3 }}>
              <Grid container spacing={3}>
                {singleProject?.screenshots?.length === 1 &&
                  singleProject?.screenshots?.map((img, ind) => (
                    <Grid item xs={12} key={ind}>
                      <Paper sx={{ height: "600px" }}>
                        <Box
                          className="auto-scroll"
                          sx={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            width: "100%",
                            height: "100%",
                            backgroundPosition: "top",
                          }}
                        ></Box>
                      </Paper>
                    </Grid>
                  ))}

                {singleProject?.screenshots?.length > 1 &&
                  singleProject?.screenshots?.map((img, ind) => (
                    <Grid item xs={12} md={4} key={ind}>
                      <Paper sx={{ height: "400px" }}>
                        <Box
                          className="auto-scroll"
                          sx={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            width: "100%",
                            height: "100%",
                            backgroundPosition: "top",
                          }}
                        ></Box>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>
            </Box>

            {/* Features */}
            <Typography variant="h5" sx={{ my: 2 }} gutterBottom>
              {" "}
              Features
            </Typography>
            <Typography variant="body1" gutterBottom>
              {singleProject.features}
            </Typography>

            {/* Technologies */}
            <Typography variant="h5" sx={{ my: 2 }} gutterBottom>
              {" "}
              Technologies
            </Typography>
            <Box sx={{ my: 1 }}>
              <Grid container spacing={1}>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {singleProject?.technology?.map((tech, ind) => (
                    <Chip
                      key={ind}
                      label={tech}
                      variant="outlined"
                      color="primary"
                      sx={{ m: 1 }}
                    />
                  ))}
                </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default SingleProjectPage;
