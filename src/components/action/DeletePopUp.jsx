import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Box,
} from "@mui/material";
import { alertIcon, closeIcon } from "../../assets";

const DeletePopUp = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Button>
        <Box
          component="img"
          alt="close"
          src={closeIcon}
          sx={{
            position: "absolute",
            top: 5,
            right: 5,
          }}
          onClick={onClose}
        />
      </Button>
      <Box
        component="img"
        alt="alert"
        src={alertIcon}
        sx={{
          width: "60px",
          height: "60px",
          margin: "auto",
        }}
      />
      <DialogTitle id="delete-dialog-title">ARE YOU SURE</DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-dialog-description">
          You will not be able to undo this action if you proceed!
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopUp;
