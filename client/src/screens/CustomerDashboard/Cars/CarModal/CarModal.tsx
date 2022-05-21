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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phone: string, message: string, date: Date | null) => void;
};

const CarModal = (props: Props) => {
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [error, setError] = React.useState(false);

  const handleSubmitAction = () => {
    checkInputErrors();
    clearInputs();
    props.onSubmit(phone, message, date);
    props.onClose();
  };

  const clearInputs = () => {
    setDate(new Date());
    setPhone("");
    setMessage("");
    setError(false);
  };

  const checkInputErrors = () => {
    if (!phone || !message) {
      setError(true);
      return;
    }

    if (!date?.toUTCString()) {
      setError(true);
      return;
    }

    setError(false);
  };

  const handleClose = () => {
    setError(false);
    props.onClose();
  };

  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={props.isOpen}
      onClose={handleClose}
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
          Make an appointment
        </Typography>

        <DateTimePicker
          disablePast
          ampm={false}
          label="Date&Time picker"
          value={date}
          onChange={setDate}
          renderInput={(params) => <TextField {...params} />}
        />

        <TextField
          sx={{ marginBottom: 2, marginTop: 2 }}
          label="Phone"
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
        )}
        <Button
          sx={{ marginTop: 2, textTransform: "none" }}
          variant="contained"
          color="primary"
          onClick={handleSubmitAction}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default CarModal;
