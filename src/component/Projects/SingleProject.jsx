import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const SingleProject = ({ img, name, desc, link, github, id }) => {
  return (
    <Grid item md={4}>
      <Paper sx={{ height: "100%", backgroundColor: "#010D1B" }} elevation={3}>
        <img src={img} alt="img" className="project-img" />
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }} gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2">{desc}</Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* left Side */}
            <Button variant="contained">
              {" "}
              <Link to={`/${id}`} style={{ color: "#010D1B" }}>
                Show Details
              </Link>{" "}
            </Button>

            {/* Right Side */}
            <Box sx={{ display: "flex" }}>
              <a
                href={github}
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
                href={link}
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
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SingleProject;
