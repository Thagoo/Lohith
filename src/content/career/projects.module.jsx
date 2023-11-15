import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid, Paper } from "@mui/material";
import studhub from "../../assets/studhub.png";
import bookease from "../../assets/bookease.png";
import todo from "../../assets/todo.png";

const projects = [
  {
    image: studhub,
    title: "Stud Hub",
    description:
      "Stud Hub is web application built with MERN stack with functions like Realtime chatting, Upload and Download PDFs",
    url: "https://github.com/Thagoo/Stud-Hub",
  },

  {
    image: bookease,
    title: "BookEase",
    description:
      "A hotel room booking application with Admin Dashboard supprt and rich user management",
    url: "https://github.com/Thagoo/mern-booking-application",
  },

  {
    image: todo,
    title: "Simple-ToDo",
    description:
      "A Simple ToDo app with Material UI more focused on backend code",
    url: "https://github.com/Thagoo/MERN-TODO",
  },
];

const typographyStyle = {
  fontSize: "15px",

  opacity: "85%",
  fontFamily: "Fjalla One",
};
export default function Projects() {
  return (
    <Grid container spacing={2} p={1}>
      {projects.map((project) => (
        <Grid item>
          <Card
            sx={{
              maxWidth: { xs: 350, md: 300 },
              bgcolor: "#f3f6f9",
              boxShadow: 5,
            }}
          >
            <CardActionArea href={project.url} target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt="img"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={typographyStyle}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={typographyStyle}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
