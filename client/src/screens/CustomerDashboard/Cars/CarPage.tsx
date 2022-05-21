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
import CarModal from "./CarModal/CarModal";
import { BodyType } from "../../../models/enums/BodyType";
import { FuelType } from "../../../models/enums/FuelType";
import {
  addAppointmentAction,
  addFavoriteAction,
  removeFavoriteAction,
} from "../../../stores/user/actions";
import { FavoriteDto } from "../../../models/dto/FavoriteDto";
import { UserDto } from "../../../models/dto/UserDto";
import { AppointmentDto } from "../../../models/dto/AppointmentDto";

const CarPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentCar = useAppSelector((state) => state.car.currentCar);
  const currentUser = useAppSelector((state) => state.user.user);
  const favorite = useAppSelector((state) =>
    state.user.favorites.find((e) => e && e.car && e.car.id === currentCar.id)
  );
  const [modalSnackbar, setModalSnackbar] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
  const [carModal, setCarModal] = React.useState(false);

  const handleToggleFavorite = () => {
    // setFav((prevState) => !prevState);
    const date = new Date();
    !!favorite
      ? dispatch(removeFavoriteAction(favorite.id))
      : dispatch(
          addFavoriteAction({
            carId: currentCar.id,
            userId: currentUser.id,
            date: date.toISOString(),
          } as FavoriteDto)
        );
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

  const handleModalSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar(false);
  };

  const handleModalSubmit = (
    phone: string,
    message: string,
    date: Date | null
  ) => {
    const appointmentDto = {
      userId: currentUser.id,
      carId: currentCar.id,
      phoneNumber: phone,
      message,
      date: date?.toISOString() ?? new Date().toISOString(),
    } as AppointmentDto;
    dispatch(addAppointmentAction(appointmentDto));
    setModalSnackbar(true);
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
    if (currentCar) {
    }
  }, [currentCar]);

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
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Manufacturer
            </Typography>
            <Typography>{currentCar.manufacturer.name}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Model
            </Typography>
            <Typography>{currentCar.model}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Body
            </Typography>
            <Typography>{BodyType[currentCar.body]}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Fuel
            </Typography>
            <Typography>{FuelType[currentCar.fuelType]}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Mileage
            </Typography>
            <Typography>{currentCar.mileage}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Seats
            </Typography>
            <Typography>{currentCar.seats}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Weight
            </Typography>
            <Typography>{currentCar.weight}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              VIN
            </Typography>
            <Typography>{currentCar.vin}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              HP
            </Typography>
            <Typography>{currentCar.hp}</Typography>
          </Box>
          <Box mb={2}>
            <Typography gutterBottom variant="h5" fontWeight={900}>
              Year of manufacture
            </Typography>
            <Typography>{currentCar.yearOFManufacturer}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setCarModal(true)}>
            Make appointment
          </Button>

          {favorite ? (
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
          {favorite ? (
            <Box>Added to favorites!</Box>
          ) : (
            <Box>Deleted from favorites!</Box>
          )}
        </Alert>
      </Snackbar>
      <Snackbar
        open={modalSnackbar}
        autoHideDuration={6000}
        onClose={handleModalSnackbarClose}
      >
        <Alert
          onClose={handleModalSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          New appointment sent!
        </Alert>
      </Snackbar>

      <CarModal
        isOpen={carModal}
        onClose={() => setCarModal(false)}
        onSubmit={handleModalSubmit}
      />
    </Box>
  );
};

export default CarPage;
