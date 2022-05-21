import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Appointment } from "../../../../models/entities/Appointment";

type Props = {
  open: boolean;
  onClose: () => void;
  appointment: Appointment | undefined;
};

const AppointmentModal = (props: Props) => {
  //   const handleSubmitAction = () => {
  //     checkInputErrors();
  //     setError(false);
  //     props.onSubmit(phone, message, date);
  //   };

  //   const checkInputErrors = () => {
  //     console.log(
  //       "🚀 ~ file: CarModal.tsx ~ line 41 ~ checkInputErrors ~ date?.toUTCString()",
  //       date?.toISOString()
  //     );
  //     if (!phone || !message) {
  //       setError(true);
  //       return;
  //     }

  //     if (!date?.toUTCString()) {
  //       setError(true);
  //       return;
  //     }

  //     setError(false);
  //   };

  //   const handleClose = () => {
  //     setError(false);
  //     props.onClose();
  //   };

  if (!props.appointment) {
    return <></>;
  }

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={props.open}
      onClose={props.onClose}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2 / 1,
          padding: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ marginBottom: 2, width: "45vw" }}
          variant="h3"
          component="h2"
        >
          Appointment
        </Typography>

        {/* <DateTimePicker
          label="Date&Time picker"
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} />}
        />


        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="PhoneNumber"
          variant="outlined"
          value={phone}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(event.target.value)
          }
        />
        <TextField
          sx={{ marginBottom: 2 }}
          label="Message"
          multiline
          rows={5}
          variant="outlined"
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(event.target.value)
          }
        />
        {error && (
          <Alert severity="error">
            Invalid input data. Please check it again!
          </Alert>
        )} */}

        <Box mb={2}>
          <Typography gutterBottom variant="h5" fontWeight={900}>
            Car
          </Typography>
          <Typography>{`${props.appointment.car.manufacturer.name} ${props.appointment.car.model}`}</Typography>
        </Box>
        <Box mb={2}>
          <Typography gutterBottom variant="h5" fontWeight={900}>
            Date
          </Typography>
          <Typography>{props.appointment.date}</Typography>
        </Box>
        <Box mb={2}>
          <Typography gutterBottom variant="h5" fontWeight={900}>
            Phone Number
          </Typography>
          <Typography>{props.appointment.phoneNumber}</Typography>
        </Box>
        <Box mb={2}>
          <Typography gutterBottom variant="h5" fontWeight={900}>
            Message
          </Typography>
          <Typography>{props.appointment.message}</Typography>
        </Box>
        <Button
          sx={{ marginTop: 2, textTransform: "none" }}
          variant="contained"
          color="secondary"
          onClick={props.onClose}
        >
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default AppointmentModal;
