import React from "react";
import { Alert, AlertTitle } from "@mui/material";
export function CustomError({errorText}) {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>{errorText}</strong>
    </Alert>
  );
}
