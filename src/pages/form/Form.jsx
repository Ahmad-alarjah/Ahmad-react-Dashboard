import { Stack, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";

const Form = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("Form Submitted");
    handleClick();
  };
  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "User", label: "User" },
  ];
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", gap: 3, flexDirection: "column" }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} spacing={2}>
        <TextField error={errors.firstName} helperText={errors.firstName?"This field is required.":"" } {...register("firstName", { required: true, maxLength: 20 })} sx={{ flex: 1 }} label="First name" variant="filled" />
        <TextField error={errors.lastName} helperText={errors.lastName?"This field is required.":"" } {...register("lastName", { required: true, maxLength: 20 })} sx={{ flex: 1 }} label="Last name" variant="filled" />
      </Stack>

      <TextField error={errors.email} helperText={errors.email?"Please provide a valid email.":"" } {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} label="Email" variant="filled" />
      <TextField error={errors.number} helperText={errors.number?"This field is required.":"" } {...register("number", { required: true, pattern: /^(?:\+?\d{1,3}[-.\s]?)?(?:\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/ })} label="Contact Number" variant="filled" />
      <TextField error={errors.firstAddress} helperText={errors.firstAddress?"This field is required.":"" } {...register("firstAddress", { required: false, maxLength: 20 })} label="Address 1" variant="filled" />
      <TextField error={errors.secondAddress} helperText={errors.secondAddress?"This field is required.":"" } {...register("secondAddress", { required: false, maxLength: 20 })} label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="User"
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          Create New User
        </Button>
        <Snackbar anchorOrigin={{vertical:"top", horizontal:"right"}} open={open} autoHideDuration={3000} onClose={handleClose}>
  <Alert
    onClose={handleClose}
    severity="info"
    variant="filled"
    sx={{ width: '100%' }}
  >
    Account created successfully.
      </Alert>
</Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
