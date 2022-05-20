import { Alert, Box, Snackbar } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCarByIdRequest } from "../../../services/CarService";
import { setCurrentCar } from "../../../stores/car/slice";
import { useAppDispatch, useAppSelector } from "../../../stores/store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentCar = useAppSelector((state) => state.car.currentCar);
  const [fav, setFav] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);

  const handleToggleFavorite = () => {
    setFav((prevState) => !prevState);
    setSnackbar(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  const fetchCar = async () => {
    if (!id || parseInt(id) < 0) {
      navigate("/dashboard/cars");
    }

    const car = await getCarByIdRequest(parseInt(id!));

    if (!car) {
      navigate("/dashboard/cars");
    }

    dispatch(setCurrentCar(car));
  };

  React.useEffect(() => {
    fetchCar();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Make appointment</Button>

          {fav ? (
            <IconButton onClick={handleToggleFavorite}>
              <StarIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleToggleFavorite}>
              <StarBorderIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
      <Snackbar
        open={snackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          {fav ? (
            <Box>Added to favorites!</Box>
          ) : (
            <Box>Deleted from favorites!</Box>
          )}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CarPage;
