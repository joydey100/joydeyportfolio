import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import data from "./ContactData";
import "./Contact.css";
import Footer from "../../component/Footer/Footer";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle chnage
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_veosg5g",
        e.target,
        "user_AWDhe82r1p3vGlD5kRnqV"
      )
      .then(
        function (response) {
          Swal.fire({
            title: "Submitted!",
            text: "Form submitted Successfully. I will connect you as soon as possible.",
            icon: "success",
            confirmButtonColor: "#00CF5D",
          });
          setInfo({ name: "", email: "", message: "" });
        },
        function (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            confirmButtonColor: "#FD642F",
          });
        }
      );
  };

  return (
    <>
      <section>
        <Container>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontWeight: "600",
              mb: 5,
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            Connect with Me
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={5}>
              <Typography variant="body1" gutterBottom sx={{ width: "75%" }}>
                {" "}
                If you need any type of assistance, Feel free to connect with
                me.
              </Typography>
              <List>
                {data.map((data) => (
                  <ListItem key={data.id}>
                    <ListItemIcon color="primary">{data.icon}</ListItemIcon>
                    <ListItemText primary={data.name} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item md={7}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label="Name"
                    variant="filled"
                    type="text"
                    sx={{ width: "100%" }}
                    name="name"
                    onChange={handleChange}
                    required
                    value={info.name}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    sx={{ width: "100%" }}
                    required
                    name="email"
                    onChange={handleChange}
                    value={info.email}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    label="Message"
                    variant="filled"
                    type="text"
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                    required
                    name="message"
                    onChange={handleChange}
                    value={info.message}
                  />
                </Box>
                <Button type="submit" variant="contained">
                  {" "}
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
