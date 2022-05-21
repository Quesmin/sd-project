import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Appointment } from "../../../../models/entities/Appointment";
import { Grid } from "@mui/material";

type Props = {
  appointment: Appointment;
  onDetailsClick: () => void;
};

const AppointmentCard = ({ appointment, onDetailsClick }: Props) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${appointment.car.manufacturer.name} ${appointment.car.model}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {appointment.date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onDetailsClick}>
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AppointmentCard;
