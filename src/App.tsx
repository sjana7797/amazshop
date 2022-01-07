import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";

//Importing Components
import Header from "./components/Header";
import Home from "./components/Home/Home";

//importing css
import "./dist/styles/style.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>
          }
        />
        <Route
          path="/checkout"
          element={
            <React.Fragment>
              <Header />
              <Checkout />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
