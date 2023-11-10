import { Box, IconButton, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Icon: {
    height: `100%`,
    width: `100%`,
  },
}));

function Socials() {
  const classes = useStyles();

  const socialMediaLinks = [
    {
      icon: <FaInstagram className={classes.Icon} />,
      href: "https://instagram.com/l_0hit",
    },
    {
      icon: <FaTelegram className={classes.Icon} />,
      href: "https://t.me/thagoo",
    },
    {
      icon: <FaDiscord className={classes.Icon} />,
      href: "https://discord.com/users/thago#3372",
    },
    {
      icon: <FaReddit className={classes.Icon} />,
      href: "https://www.reddit.com/user/No_Dig6944",
    },
    {
      icon: <FaLinkedin className={classes.Icon} />,
      href: "https://www.linkedin.com/in/lohith-295814233/",
    },
    {
      icon: <FaGithub className={classes.Icon} />,
      href: "https://github.com/thagoo",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {socialMediaLinks.map((link, index) => (
          <Box key={index} sx={{ width: { xs: "40%", md: "15%" } }}>
            <IconButton
              href={link.href}
              sx={{ width: "100%", color: "inherit" }}
            >
              {link.icon}
            </IconButton>
          </Box>
        ))}
      </div>
    </>
  );
}

export default Socials;
