import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WishlistProvider from "./context/WishlistContext";
import CartProvider from "./context/CartContext";
import ThemeProvider from "./context/ThemeContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>

          <App />

          <ToastContainer
            position="top-right"
            autoClose={2000}
          />

        </CartProvider>
      </WishlistProvider>
    </ThemeProvider>
  </BrowserRouter>
);