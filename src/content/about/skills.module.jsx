import { List } from "@mui/material";
import React from "react";
import {
  FaLinux,
  FaReact,
  FaJs,
  FaAndroid,
  FaJava,
  FaDocker,
  FaGit,
  FaJenkins,
  FaPython,
  FaTerminal,
  FaNode,
} from "react-icons/fa6";
import { BiLogoCPlusPlus, BiLogoGoogleCloud } from "react-icons/bi";
import { SiAmazonec2 } from "react-icons/si";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  Icon: {
    height: `100%`,
    width: `100%`,
  },
}));

function Skills() {
  const classes = useStyles();

  const Icons = [
    <FaLinux className={classes.Icon} />,
    <FaReact className={classes.Icon} />,
    <FaJs className={classes.Icon} />,
    <FaAndroid className={classes.Icon} />,
    <FaJava className={classes.Icon} />,
    <FaDocker className={classes.Icon} />,
    <FaGit className={classes.Icon} />,
    <FaJenkins className={classes.Icon} />,
    <FaPython className={classes.Icon} />,
    <FaTerminal className={classes.Icon} />,
    <FaNode className={classes.Icon} />,
    <SiAmazonec2 className={classes.Icon} />,
    <BiLogoGoogleCloud className={classes.Icon} />,
  ];

  return (
    <>
      <List style={{ width: "100%" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Icons.map((icon) => (
            <div style={{ width: "15%", padding: "8px" }}>{icon}</div>
          ))}
        </div>
      </List>
    </>
  );
}

export default Skills;
