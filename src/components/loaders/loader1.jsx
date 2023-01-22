import React from "react";
// import Backdrop from "@m ui/material/Backdrop";
import { Backdrop } from '@mui/material';
import { CircularProgress } from "@mui/material";
export function CustomLoader() {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
