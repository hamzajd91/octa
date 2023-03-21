import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

import IconButton from '@mui/material/IconButton';

export const ReadMoreBtn = styled(Button)({
  background: "#F33A59",
  border: 0,
  borderRadius: 50,
  color: "white",
  height: 28,
  padding: "23px 30px",
  textTransform: "capitalize",
  margin: "0px auto",
  marginBottom: "20px",
  "&:hover": {
    background: "#F33A09",
  },
});

export const NavBtn = styled(IconButton)({
    border: "9px",
    borderColor: "#F33A59",
});