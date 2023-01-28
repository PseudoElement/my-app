import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import "./navigation.css";

export function Navigation() {
  const { deauthorize, isAuth } = useAuth();

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav>
      <Link to="/">Posts</Link>
      {isAuth && <Link to="/about">About us</Link>}
     {isAuth && <Link to="/account">My account</Link>}
      {isAuth ? (
        <Button
          onClick={() => setIsOpen(true)}
          variant="contained"
          color="primary"
        >
          Log out
        </Button>
      ) : (
        <Link style={{textDecoration: 'none'}} to="/login">
          <Button variant="contained" color="primary">
            Log in
          </Button>
        </Link>
      )}
      <Modal
        onBackdropClick={() => setIsOpen(false)}
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            background:
              "-webkit-linear-gradient(top, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 50%,rgba(168,0,119,1) 51%,rgba(219,54,164,1) 100%)",
            color: "white",
            position: "absolute",
            height: "100%",
            maxHeight: 200,
            width: "100%",
            maxWidth: 500,
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to log out?
          </Typography>
          <Button
            onClick={() => {deauthorize(); setIsOpen(false)}}
            className="MyBeatifulButton"
            sx={{ margin: "20px" }}
            size="large"
            variant="contained"
          >
            Yes
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            sx={{ margin: "20px" }}
            size="large"
            variant="contained"
          >
            No
          </Button>
        </Box>
      </Modal>
    </nav>
  );
}
