import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

function LatestBlogsCard(props) {
  useEffect(() => {
    // console.log(props);
  });
  return (
    <div className="">
      <Card className="cardsBlog">
        <Card.Img variant="top" src={props.img} className="cardblogimage" />
        <div className="Cardhover"></div>
        <Card.Title className="cardTitle">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <Button variant="primary" className="cardButton">
          Read More
        </Button>
      </Card>
    </div>
  );
}

export default LatestBlogsCard;
