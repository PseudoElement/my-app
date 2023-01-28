import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./components/AppRouter/AppRouter";
// import { AuthProvider } from "./context/AuthContext";

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
