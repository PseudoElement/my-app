import { Button } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

export function MyError() {
  return (
    <div className="error">
      <h1>Something got wrong...</h1>
      <Link to="/">
        <Button variant="contained" color="error">
          Back to homepage
        </Button>
      </Link>
    </div>
  );
}
