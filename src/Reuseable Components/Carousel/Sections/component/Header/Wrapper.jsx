import React from "react";
// import { makeStyles } from "@mui/material/styles";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "35%",
//     [theme.breakpoints.down("sm")]: {
//       width: "80%",
//     },
//   },
// }));

const Wrapper = () => {
  // const classes = useStyles();

  const subtitle =
    "We develop successful apps for our clients who range from startup entrepreneurs to Fortune 500s.";

  return (
    <header className="d-flex flex-column align-items-center justify-content-center">
      <Heading title="What We Do" />
      <SubHeading title={subtitle} />
    </header>
  );
};

export default Wrapper;
