import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export function MyAccount() {
  return (
    <div className="account-page">
      <h1>You're successfully authorized.</h1>
      <Link to="/">
        <Button variant="contained" color="secondary">
          Enjoy my posts
        </Button>
      </Link>
    </div>
  );
}
