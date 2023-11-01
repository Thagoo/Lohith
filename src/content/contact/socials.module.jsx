import { IconButton, List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
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

  const socials = [
    <FaInstagram className={classes.Icon} />,
    <FaFacebook className={classes.Icon} />,
  ];
  return (
    <>
      <List style={{ width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "20%" }}>
            <IconButton
              href="https://instagram.com/l_0hit"
              sx={{ width: "100%", color: `inherit` }}
            >
              <FaInstagram className={classes.Icon} />
            </IconButton>
          </div>

          <div style={{ width: "20%" }}>
            <IconButton
              href="https://t.me/thagoo"
              sx={{ width: "100%", color: `inherit` }}
            >
              <FaTelegram className={classes.Icon} />
            </IconButton>
          </div>
          <div style={{ width: "20%" }}>
            <IconButton
              href="https://discord.com/users/thago#3372"
              sx={{ width: "100%", color: `inherit` }}
            >
              <FaDiscord className={classes.Icon} />
            </IconButton>
          </div>
          <div style={{ width: "20%" }}>
            <IconButton
              href="https://www.reddit.com/user/No_Dig6944"
              sx={{ width: "100%", color: `inherit` }}
            >
              <FaReddit className={classes.Icon} />
            </IconButton>
          </div>
          <div style={{ width: "20%" }}>
            <IconButton
              href="https://www.linkedin.com/in/lohith-295814233/"
              sx={{ width: "100%", color: `inherit` }}
            >
              <FaLinkedin className={classes.Icon} />
            </IconButton>
          </div>
        </div>
      </List>
    </>
  );
}

export default Socials;
