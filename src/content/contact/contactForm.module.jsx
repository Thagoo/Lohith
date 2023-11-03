import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setFieldValue, resetForm } from "../../app/contactFormSlice";
import * as yup from "yup";
import { useEffect, useState } from "react";

const typographyStyle = {
  fontSize: "15px",

  opacity: "85%",
  fontFamily: "Fjalla One",
};
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactForm() {
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const contactForm = useSelector((state) => state.contactForm);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    dispatch(setFieldValue({ field: name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    validationSchema
      .validate(contactForm, { abortEarly: false })
      .then(() => {
        fetch("https://formspree.io/maygknqo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactForm),
        });
        setOpen(true);
        setDisableSubmit(true);
      })
      .catch((validationErrors) => {
        console.log(validationErrors);
        const errors = {};

        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });

        setErrors(errors);
      });
  };

  useEffect(() => {
    let timer = null;

    if (disableSubmit) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      clearInterval(timer);
      setDisableSubmit(false); // Enable the submit button after the countdown reaches 0
    }

    return () => {
      clearInterval(timer);
    };
  }, [disableSubmit, countdown]);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { p: 1 },
        height: "100%",
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Snackbar
        open={open}
        autoHideDuration={"1000"}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleClose}
        message={"Message Sent"}
      />

      <FormControl variant="standard">
        <InputLabel
          htmlFor="component-simple"
          color="secondary"
          sx={typographyStyle}
        >
          Name
        </InputLabel>
        <Input
          id="component-simple"
          name="name"
          color="secondary"
          value={contactForm.name}
          error={!!errors.name}
          onChange={(e) => handleInputChange(e)}
          sx={typographyStyle}
        />{" "}
        <FormHelperText error sx={typographyStyle}>
          {errors.name}
        </FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel
          htmlFor="component-simple"
          color="secondary"
          sx={typographyStyle}
        >
          Email
        </InputLabel>

        <Input
          id="component-simple"
          color="secondary"
          name="email"
          value={contactForm.email}
          error={!!errors.email}
          onChange={(e) => handleInputChange(e)}
          sx={typographyStyle}
        />
        <FormHelperText error sx={typographyStyle}>
          {errors.email}
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{ mt: "10px" }}>
        <TextField
          multiline
          minRows={4}
          reset
          name="message"
          color="secondary"
          margin="normal"
          label={<Typography sx={typographyStyle}>Message</Typography>}
          value={contactForm.message}
          error={!!errors.message}
          helperText={
            <Typography sx={typographyStyle}>{errors.message}</Typography>
          }
          onChange={(e) => handleInputChange(e)}
          sx={typographyStyle}
        />
      </FormControl>
      <Button
        disabled={disableSubmit}
        type="submit"
        variant="contained"
        color="secondary"
        sx={{
          boxShadow: `none`,
          textTransform: `none`,
          fontFamily: `Fjalla One`,
          px: 3,
          mt: 2,
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
