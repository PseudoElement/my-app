import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { CustomLoader } from "./components/loaders/loader1";
import "./App.css";
import { About } from "./pages/About";
import Posts from "./pages/Posts";
import { MyError } from "./pages/Error";
export function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route loader={CustomLoader} path="/" element={<Posts />} />
          <Route loader={CustomLoader} path="/about" element={<About />} />
          <Route path ='*' element={<MyError/>} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
