import React from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

export default function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
