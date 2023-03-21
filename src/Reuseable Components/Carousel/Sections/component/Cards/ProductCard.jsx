import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import Start from "./start.png";
import End from "./end.png";

const ProductCard = ({ img, show, title, detail }) => {
  // const classes = useStyles();
  return (
    <Card className="Cardroot">
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="100"
        image={img}
      />
      <CardContent className="content">
        <Typography variant="body2" color="textSecondary" component="p">      
          Title
        </Typography>

        <Typography className="heading" gutterBottom variant="p" component="p">
        <div className="Quotes" style={{float:"left"}}>
            <img src={Start} alt="" />
            <img src={Start} alt="" />
          </div>
          
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets 
          
          <div className="Quotes" style={{float:"right"}} >
            <img src={End} alt="" />
            <img src={End} alt="" />
          </div>
        </Typography>
      </CardContent>

      {/* {show && (
        <CardActions>
          <ReadMoreBtn>
            Read more <ChevronRight />
          </ReadMoreBtn>
        </CardActions>
      )} */}
    </Card>
  );
};

export default ProductCard;
