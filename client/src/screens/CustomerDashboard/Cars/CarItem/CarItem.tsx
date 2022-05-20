import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  description: string;
};

const CarItem = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/dashboard/cars/${props.id}`);
  };
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345, minWidth: 200 }} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" fontWeight={900}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CarItem;
