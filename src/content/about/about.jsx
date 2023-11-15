import {
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import Skills from "./skills.module";

export const aboutContent = [
  {
    key: "me",
    title: "Hi, I am Lohith",
    content: (
      <>
        <List>
          <ListItem>
            <Typography
              variant="h5"
              sx={{
                fontSize: "20px",

                color: "#222",
                opacity: "85%",
                fontFamily: "Fjalla One",
              }}
            >
              A passionate full-stack web developer .
            </Typography>
          </ListItem>
          <Typography
            variant="p"
            sx={{
              fontSize: "18px",
              color: "#222",
              opacity: "60%",
              fontFamily: "Fjalla One",
            }}
          >
            You might know me from
          </Typography>
          <ListItem
            sx={{
              listStyleType: "disc",
              display: "list-item",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: "18px",
                color: "#222",
                opacity: "85%",
                fontFamily: "Fjalla One",
              }}
            >
              Android Custom Rom and kernel such as Triton kernel
            </Typography>
          </ListItem>
          <ListItem
            sx={{
              listStyleType: "disc",
              display: "list-item",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontSize: "18px",
                color: "#222",
                opacity: "85%",
                fontFamily: "Fjalla One",
              }}
            >
              MSM8937 Developement Communinty
            </Typography>
          </ListItem>
        </List>
      </>
    ),
  },
  {
    key: "thagoo",
    title: "@thagoo",
    content: `"Thagoo" began as a whimsical username chosen in childhood, primarily to attract attention. Little did I know that this seemingly playful decision would evolve into a crucial element of my online identity across platforms like Telegram, GitHub, and XDA.

    As a young explorer of the digital world, "Thagoo" quickly became my online alter ego. `,
  },
  {
    key: "skills",
    title: "Skills",
    content: <Skills />,
  },
  {
    key: "language",
    title: "Spoken Languages",
    content: (
      <>
        <ul>
          <li>My mother tongue is Kannada</li>
          <li>I am fluent in English</li>
          <li>I can understand Hindi</li>
        </ul>
      </>
    ),
  },

  {
    key: "secret",
    title: "Secret",
    content: " I use Arch btw :D",
  },
];
