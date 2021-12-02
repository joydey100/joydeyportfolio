import { Container, Typography } from "@mui/material";
import React from "react";

const Blog = () => {
  return (
    <section>
      <Container>
        <Typography
          sx={{ textAlign: "center", color: "#fff", fontWeight: "500" }}
          variant="h4"
        >
          {" "}
          Blogs are Coming Soon!!!
        </Typography>
      </Container>
    </section>
  );
};

export default Blog;
