import React from "react";
import { Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: "2.8em",
//     lineHeight: 2.1,
//   },
// }));

const Heading = ({ title }) => {
  const classes = useStyles();

  return <Typography className="B1">{title}</Typography>;
};

export default Heading;
