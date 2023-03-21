import React from "react";
import { Typography } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: "#ABACB0",
//     fontWeight: 400,
//     textAlign: "center",
//   },
// }));

const SubHeading = ({ title }) => {
  // const classes = useStyles();

  return <Typography className="B2">{title}</Typography>;
};

export default SubHeading;
