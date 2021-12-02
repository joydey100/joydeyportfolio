import { IconButton, Stack } from "@mui/material";
import React from "react";
import data from "./SocialIcondata";

const SocialIcon = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        {data.map((data) => (
          <a href={data.link} target="_blank" rel="noreferrer" key={data.id}>
            <IconButton key={data.id} size="large" sx={{ fontSize: "25px" }}>
              {data.icon}
            </IconButton>
          </a>
        ))}
      </Stack>
    </>
  );
};

export default SocialIcon;
